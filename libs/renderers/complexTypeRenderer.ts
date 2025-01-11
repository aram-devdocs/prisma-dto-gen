import type { DMMF } from "@prisma/generator-helper";
import { InlineContext } from "../context/InlineContext.js";
import type { Config } from "../config/config.js";
import { buildUnionType } from "../utils/buildUnionType.js";
import { inlineEnum } from "./enumRenderer.js";
import { inlineModelDefinition } from "./modelRenderer.js";
import { inlineModelZodSchema, inlineCustomTypes } from "./zodHelpers.js";
import { indentBlock } from "../utils/indentBlock.js";
import { SCALAR_TYPE_GETTERS } from "../consts/SCALAR_TYPE_GETTERS.js";
import { ZOD_SCALAR_TYPE_GETTERS } from "../consts/ZOD_SCALAR_TYPE_GETTERS.js";

/**
 * Generates a TS type (or interface) for input/output object types,
 * plus optional zod schema if `config.schema = "zod"`.
 */
export function generateComplexTypeInline(
  io: DMMF.InputType | DMMF.OutputType,
  allModels: DMMF.Model[],
  enumMap: Map<string, DMMF.DatamodelEnum>,
  modelMap: Map<string, DMMF.Model>,
  config: Config,
  isInput: boolean,
): string {
  const context = new InlineContext(config);
  const typeName =
    `${config.typePrefix}${io.name}${!isInput ? "Output" : ""}${config.typeSuffix}`.replace(
      /\W+/g,
      "_",
    );

  // 1) Build the TS shape
  const lines: string[] = [];
  for (const field of io.fields) {
    let isRequired = true;
    let isNullable = false;

    // Handle both input & output fields type-safely
    if ("isRequired" in field) {
      isRequired = field.isRequired === true;
    }
    if ("isNullable" in field) {
      isNullable = field.isNullable === true;
    }

    // For input types, also check if any of the input types is Null
    if ("inputTypes" in field) {
      const hasNullType = field.inputTypes.some((t) => t.type === "Null");
      if (hasNullType) {
        isNullable = true;
        isRequired = false;
      }
    }

    const linePrefix = isRequired ? ":" : "?:";
    // Remove the orNull logic as nullable properties are treated as optional
    // const orNull = !isRequired ? " | null" : "";

    // Build a union of possible TS types for this field
    let unionTypes: string[] = [];

    // For input => check field.inputTypes
    if ("inputTypes" in field) {
      const schemaArg = field as DMMF.SchemaArg;
      unionTypes = schemaArg.inputTypes.map((t) => {
        if (t.location === "scalar") {
          const getter = SCALAR_TYPE_GETTERS[String(t.type)];
          if (getter) {
            let st = getter(config);
            // track usage of custom types
            if (st === "JsonValue") context.addCustomTypeUsage("JsonValue");
            if (st === "Decimal") context.addCustomTypeUsage("Decimal");
            if (st === "BufferObject") context.addCustomTypeUsage("BufferObject");
            if (t.isList) st += "[]";
            return st;
          }
          return "any";
        } else if (t.location === "enumTypes") {
          const en = enumMap.get(String(t.type));
          if (en) {
            return inlineEnum(en, config);
          }
          return "any";
        } else if (t.location === "inputObjectTypes") {
          // If there's a known input object type we can inline it.
          // But we only have references to them in the DMMF's inputObjectTypes array, not the modelMap.
          // For now, fallback to "any" or recursively do the same approach.
          return "any";
        }
        return "any";
      });
    }
    // For output => check field.outputType
    else if ("outputType" in field) {
      const { location, type, isList } = field.outputType;
      if (location === "scalar") {
        const getter = SCALAR_TYPE_GETTERS[String(type)];
        if (getter) {
          let st = getter(config);
          if (st === "JsonValue") context.addCustomTypeUsage("JsonValue");
          if (st === "Decimal") context.addCustomTypeUsage("Decimal");
          if (st === "BufferObject") context.addCustomTypeUsage("BufferObject");
          if (isList) st += "[]";
          unionTypes.push(st);
        }
      } else if (location === "enumTypes") {
        const en = enumMap.get(String(type));
        if (en) {
          unionTypes.push(inlineEnum(en, config));
        }
      } else if (location === "outputObjectTypes") {
        // We might inline from the modelMap if it references an actual model or composite type
        const theModel = modelMap.get(String(type));
        if (theModel) {
          unionTypes.push(inlineModelDefinition(theModel, allModels, enumMap, modelMap, context));
        }
      }
    }

    // If we have no recognized types, fallback to `any`
    if (unionTypes.length === 0) {
      unionTypes.push("any");
    }

    const union = buildUnionType(unionTypes); // + orNull;
    lines.push(`  ${field.name}${linePrefix} ${union};`);
  }

  const shape = `{\n${lines.join("\n")}\n}`;
  let typeDef = `export interface ${typeName} ${shape}`;
  if (config.modelType === "type") {
    typeDef = `export type ${typeName} = ${shape};`;
  }

  // 2) If Zod is enabled, generate a naive Zod schema
  let zodPart = "";
  if (config.schema === "zod") {
    const schemaContext = new InlineContext(config);
    const schemaName = `${config.schemaPrefix}${io.name}${!isInput ? "Output" : ""}${config.schemaSuffix}`;

    const zodLines: string[] = [];
    for (const field of io.fields) {
      let zodField = "z.any()";
      let fieldIsList = false;
      let fieldIsNullable = false;

      // Input fields => field.inputTypes
      if ("inputTypes" in field) {
        const schemaArg = field as DMMF.SchemaArg;
        const primaryType = schemaArg.inputTypes[0];
        if (primaryType) {
          fieldIsList = primaryType.isList ?? false;
          if (primaryType.location === "scalar") {
            const getter = ZOD_SCALAR_TYPE_GETTERS[String(primaryType.type)];
            if (getter) {
              zodField = getter(config);
            }
          } else if (primaryType.location === "enumTypes") {
            const en = enumMap.get(String(primaryType.type));
            if (en) {
              const values = en.values.map((v) => `"${v.name}"`).join(", ");
              zodField = `z.enum([${values}])`;
            }
          } else if (primaryType.location === "inputObjectTypes") {
            // Could inline if you want. For brevity, do z.any()
            zodField = "z.any()";
          }
        }
        // Input fields treat "field.isNullable" as boolean
        fieldIsNullable = field.isNullable === true;
      }
      // Output fields => field.outputType
      else if ("outputType" in field) {
        const { location, type, isList } = field.outputType;
        fieldIsList = isList;
        fieldIsNullable = "isNullable" in field ? field.isNullable === true : false;

        if (location === "scalar") {
          const getter = ZOD_SCALAR_TYPE_GETTERS[String(type)];
          if (getter) {
            zodField = getter(config);
          }
        } else if (location === "enumTypes") {
          const en = enumMap.get(String(type));
          if (en) {
            const values = en.values.map((v) => `"${v.name}"`).join(", ");
            zodField = `z.enum([${values}])`;
          }
        } else if (location === "outputObjectTypes") {
          const theModel = modelMap.get(String(type));
          if (theModel) {
            zodField = inlineModelZodSchema(
              theModel,
              allModels,
              enumMap,
              modelMap,
              new InlineContext(config),
            );
          }
        }
      }

      // If list => wrap in z.array()
      if (fieldIsList) {
        zodField = `z.array(${zodField})`;
      }

      const isRequired = "isRequired" in field ? field.isRequired === true : true;
      const isNullable = "isNullable" in field ? field.isNullable === true : false;
      // Handle nullable and optional cases
      if (isRequired) {
        if (isNullable) {
          zodField += `.nullable()`;
        }
      } else {
        if (isNullable) {
          zodField += `.nullable().optional()`;
        } else {
          zodField += `.optional()`;
        }
      }

      zodLines.push(`${field.name}: ${zodField},`);
    }

    const zodObj = `z.object({\n${indentBlock(zodLines, 2)}\n})`;
    const zodImport = `import { z } from "zod";\n\n`;
    const zodDef = `
  ${zodImport}export const ${schemaName} = ${zodObj};
  `.trim();

    // Merge used custom types from that schema context
    for (const c of schemaContext.usedCustomTypes) {
      context.addCustomTypeUsage(c);
    }

    zodPart = zodDef;
  }

  // 3) Inline any custom types
  const customTypesBlock = inlineCustomTypes(context);

  // 4) Final combined content
  return [customTypesBlock, typeDef, zodPart].filter(Boolean).join("\n\n");
}
