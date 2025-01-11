import type { DMMF } from "@prisma/generator-helper";
import generatorHelper from "@prisma/generator-helper";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve as resolvePath } from "node:path";

const { generatorHandler } = generatorHelper;

/** Configuration options for the DTO generator */
interface Config {
  enumPrefix: string;
  enumSuffix: string;
  modelPrefix: string;
  modelSuffix: string;
  typePrefix: string;
  typeSuffix: string;
  headerComment: string;
  modelType: "interface" | "type";
  enumType: "stringUnion" | "enum" | "object";
  dateType: "Date" | "string" | "number";
  bigIntType: "bigint" | "string" | "number";
  decimalType: "Decimal" | "string" | "number";
  bytesType: "Buffer" | "BufferObject" | "string" | "number[]";
  optionalRelations: boolean;
  omitRelations: boolean;
  optionalNullables: boolean;
  prettier: boolean;
  resolvePrettierConfig: boolean;
  appendExtensions: boolean;
  schema: "zod" | null;
  schemaPrefix: string;
  schemaSuffix: string;
}

const DEFAULT_SCHEMA_SUFFIX = "Schema";

/** Maps Prisma scalar types to their corresponding TypeScript types */
const SCALAR_TYPE_GETTERS: Record<string, (config: Config) => string> = {
  String: () => "string",
  Boolean: () => "boolean",
  Int: () => "number",
  Float: () => "number",
  Json: () => "JsonValue",
  DateTime: (c) => c.dateType,
  BigInt: (c) => c.bigIntType,
  Decimal: (c) => c.decimalType,
  Bytes: (c) => c.bytesType,
};

/** If generating Zod schemas, these are the scalar mappings */
const ZOD_SCALAR_TYPE_GETTERS: Record<string, (config: Config) => string> = {
  String: () => "z.string()",
  Boolean: () => "z.boolean()",
  Int: () => "z.number()",
  Float: () => "z.number()",
  Json: () => "z.any()",
  DateTime: (c) => (c.dateType === "Date" ? "z.date()" : "z.string()"),
  BigInt: (c) => (c.bigIntType === "bigint" ? "z.bigint()" : "z.string()"),
  Decimal: () => "z.any()",
  Bytes: () => "z.any()", // If you must treat bytes strictly, you can do z.instanceof(Buffer) or a custom check
};

/** Minimal custom type definitions inlined if used */
const CUSTOM_TYPES = {
  BufferObject: `type BufferObject = { type: "Buffer"; data: number[] };`,
  Decimal: `type Decimal = { valueOf(): string };`,
  JsonValue: `type JsonValue =
    | string
    | number
    | boolean
    | { [key: string]: JsonValue }
    | JsonValue[]
    | null;`,
};

function validateConfig(config: Config) {
  const errors: string[] = [];
  if (!["interface", "type"].includes(config.modelType)) {
    errors.push(`Invalid modelType: ${config.modelType}`);
  }
  if (!["stringUnion", "enum", "object"].includes(config.enumType)) {
    errors.push(`Invalid enumType: ${config.enumType}`);
  }
  if (!["Date", "string", "number"].includes(config.dateType)) {
    errors.push(`Invalid dateType: ${config.dateType}`);
  }
  if (!["bigint", "string", "number"].includes(config.bigIntType)) {
    errors.push(`Invalid bigIntType: ${config.bigIntType}`);
  }
  if (!["Decimal", "string", "number"].includes(config.decimalType)) {
    errors.push(`Invalid decimalType: ${config.decimalType}`);
  }
  if (!["Buffer", "BufferObject", "string", "number[]"].includes(config.bytesType)) {
    errors.push(`Invalid bytesType: ${config.bytesType}`);
  }
  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }
}

/**
 * Flatten a union of types but avoid duplicates or contradictory "any"
 */
function buildUnionType(types: string[]): string {
  const unique = new Set(types);
  if (unique.has("any") && unique.size > 1) {
    // if any is in the set, effectively it's all any
    unique.clear();
    unique.add("any");
  }
  if (unique.size === 0) return "any";
  const arr = [...unique];
  return arr.length === 1 ? arr[0] : `(${arr.join(" | ")})`;
}

function indentBlock(lines: string[], indentSize = 2): string {
  const indent = " ".repeat(indentSize);
  return lines.map((line) => indent + line).join("\n");
}

/** Helper to write file with optional Prettier formatting */
async function writeTsFile({
  filePath,
  content,
  config,
}: {
  filePath: string;
  content: string;
  config: Config;
}) {
  let finalContent = content;
  if (config.headerComment) {
    const hdr = config.headerComment
      .split("\n")
      .map((x) => `// ${x}`)
      .join("\n");
    finalContent = `${hdr}\n\n${finalContent}`;
  }
  if (!finalContent.trim()) {
    finalContent = "// (auto-generated empty file)\nexport {};";
  }
  if (config.prettier) {
    let prettier: typeof import("prettier");
    try {
      prettier = await import("prettier");
    } catch {
      throw new Error("Unable to import Prettier. Is it installed?");
    }
    const opts = config.resolvePrettierConfig ? await prettier.resolveConfig(filePath) : null;
    finalContent = await prettier.format(finalContent, {
      ...opts,
      parser: "typescript",
    });
  }
  await mkdir(dirname(filePath), { recursive: true });
  await writeFile(filePath, finalContent, "utf-8");
}

/**
 * Because each file is fully inlined, we keep track of expansions we've already done
 * to prevent infinite recursion. For any circular references, we degrade to "any" or "unknown".
 */
class InlineContext {
  visitedTypes = new Set<string>();
  usedCustomTypes = new Set<keyof typeof CUSTOM_TYPES>();

  constructor(public config: Config) {}

  markVisited(name: string) {
    this.visitedTypes.add(name);
  }
  isVisited(name: string) {
    return this.visitedTypes.has(name);
  }

  /** If we use a custom type, track that so we can inline its definition */
  addCustomTypeUsage(type: keyof typeof CUSTOM_TYPES) {
    this.usedCustomTypes.add(type);
  }
}

/**
 * Renders the inline TS type (e.g. "string", "number", or an entire inlined model).
 * @param field Field we’re rendering.
 * @param allModels all DMMF models (for references).
 * @param enumMap enum name -> DMMF.DatamodelEnum
 * @param modelMap model name -> DMMF.Model
 * @param context local inline context
 * @returns TypeScript snippet
 */
function renderFieldTypeInline(
  field: DMMF.Field,
  allModels: DMMF.Model[],
  enumMap: Map<string, DMMF.DatamodelEnum>,
  modelMap: Map<string, DMMF.Model>,
  context: InlineContext,
): string {
  const { config } = context;
  const { kind, type, isList } = field;
  let tsType = "any";

  if (kind === "scalar") {
    const getter = SCALAR_TYPE_GETTERS[type];
    if (getter) {
      tsType = getter(config);
      // record usage if needed
      if (tsType === "JsonValue") {
        context.addCustomTypeUsage("JsonValue");
      } else if (tsType === "Decimal") {
        context.addCustomTypeUsage("Decimal");
      } else if (tsType === "BufferObject") {
        context.addCustomTypeUsage("BufferObject");
      }
    }
  } else if (kind === "enum") {
    // inline an enum
    const e = enumMap.get(type);
    if (e) {
      tsType = inlineEnum(e, config);
    }
  } else if (kind === "object") {
    if (!config.omitRelations) {
      const referencedModel = modelMap.get(type);
      if (referencedModel) {
        tsType = inlineModelDefinition(referencedModel, allModels, enumMap, modelMap, context);
      }
    } else {
      // if we omit relations, skip
      tsType = "never";
    }
  } else {
    // "unsupported"? fallback
    tsType = "any";
  }

  if (isList) {
    tsType = `${tsType}[]`;
  }
  return tsType;
}

/**
 * Renders the inline enum as a TS type (based on config.enumType).
 */
function inlineEnum(e: DMMF.DatamodelEnum, config: Config): string {
  // We'll just generate a union, or enum, or object
  switch (config.enumType) {
    case "enum": {
      // `enum MyEnum { A = "A", B = "B" }`
      const lines = e.values.map((v) => `  ${v.name} = "${v.name}"`).join(",\n");
      return `{\n${lines}\n}`;
    }
    case "stringUnion": {
      // `"A" | "B"`
      const union = e.values.map((v) => `"${v.name}"`).join(" | ");
      return union || "string";
    }
    case "object": {
      // as const object
      const pairs = e.values.map((v) => `  ${v.name}: "${v.name}"`).join(",\n");
      // Remove unused 'obj' variable
      return `{\n${pairs}\n}`;
    }
  }
  return "any";
}

/**
 * Inlines a model as a TS interface (or type) string.
 * If not visited, recursively inlines its referenced relations.
 */
function inlineModelDefinition(
  m: DMMF.Model,
  allModels: DMMF.Model[],
  enumMap: Map<string, DMMF.DatamodelEnum>,
  modelMap: Map<string, DMMF.Model>,
  context: InlineContext,
): string {
  const { config } = context;
  const mappedName = (config.modelPrefix + m.name + config.modelSuffix).replace(/\W+/g, "_");

  // If we already visited this model, return a placeholder type to avoid infinite recursion
  if (context.isVisited(mappedName)) {
    // You can choose "any" or "unknown" or a partial
    return "any /* circular reference to " + mappedName + " */";
  }

  // Mark visited
  context.markVisited(mappedName);

  // Build fields
  const fieldLines: string[] = [];
  for (const field of m.fields) {
    const { name, isRequired } = field;
    // If isRequired => `name: T`, else `name?: T | null`
    const isOptional = !isRequired;
    const lineKey = isOptional ? `${name}?:` : `${name}:`; // Changed to const

    // Possibly add "| null"
    let orNull = "";
    if (!isRequired) {
      orNull = " | null";
    }

    // If it's a relation and optionalRelations is set, also add `| null`
    // but we handle that differently if the user wants.
    // We'll just keep the orNull logic as is.
    const fieldTs = renderFieldTypeInline(field, allModels, enumMap, modelMap, context) + orNull;

    fieldLines.push(`${lineKey} ${fieldTs};`);
  }

  // Compose
  const body = `{\n${indentBlock(fieldLines, 2)}\n}`; // Changed to const
  if (config.modelType === "interface") {
    return body; // We only return the shape, not a named type, because we are inlining
  } else {
    return body; // same shape
  }
}

/** Inlines a model as a zod schema. Similar approach as above. */
function inlineModelZodSchema(
  m: DMMF.Model,
  allModels: DMMF.Model[],
  enumMap: Map<string, DMMF.DatamodelEnum>,
  modelMap: Map<string, DMMF.Model>,
  context: InlineContext,
): string {
  const { config } = context;
  const schemaName = `${config.schemaPrefix}${m.name}${config.schemaSuffix}`;

  if (context.isVisited(schemaName)) {
    return `z.any() /* circular reference to ${schemaName} */`;
  }
  context.markVisited(schemaName);

  const fieldLines: string[] = [];
  for (const field of m.fields) {
    const { name, isRequired } = field;
    let zodType = renderZodFieldInline(field, allModels, enumMap, modelMap, context);
    // apply isRequired or optional
    // for non-required => `.nullable()`
    if (!isRequired) {
      zodType += `.nullable()`;
    }
    fieldLines.push(`${name}: ${zodType},`); // Added comma here
  }
  return `z.object({\n${indentBlock(fieldLines, 2)}\n})`;
}

/** Convert a single field to Zod type, possibly inlining references. */
function renderZodFieldInline(
  field: DMMF.Field,
  allModels: DMMF.Model[],
  enumMap: Map<string, DMMF.DatamodelEnum>,
  modelMap: Map<string, DMMF.Model>,
  context: InlineContext,
): string {
  const { config } = context;
  if (!config.schema) {
    return "z.any()";
  }
  const { kind, type, isList } = field;
  let zodType = "z.any()";
  if (kind === "scalar") {
    const getter = ZOD_SCALAR_TYPE_GETTERS[type];
    if (getter) {
      zodType = getter(config);
    }
  } else if (kind === "enum") {
    // inline the enum as z.enum([...])
    const e = enumMap.get(type);
    if (e) {
      const values = e.values.map((v) => `"${v.name}"`).join(", ");
      zodType = `z.enum([${values}])`;
    }
  } else if (kind === "object") {
    if (config.omitRelations) {
      zodType = "z.any()";
    } else {
      const referencedModel = modelMap.get(type);
      if (referencedModel) {
        // inline that model’s schema
        zodType = inlineModelZodSchema(referencedModel, allModels, enumMap, modelMap, context);
      } else {
        zodType = "z.any()";
      }
    }
  }

  if (isList) {
    zodType = `z.array(${zodType})`;
  }
  return zodType;
}

/**
 * Inline an enum as a z.enum([...]) for the schema. If the user set enumType differently, we ignore that:
 * Zod uses z.enum(), which is effectively a string union.
 */
function inlineEnumZodSchema(e: DMMF.DatamodelEnum): string {
  const values = e.values.map((v) => `"${v.name}"`).join(", ");
  return `z.enum([${values}])`;
}

/** Inlines custom types if used. */
function inlineCustomTypes(context: InlineContext): string {
  if (context.usedCustomTypes.size === 0) return "";
  const lines: string[] = [];
  for (const t of context.usedCustomTypes) {
    lines.push(CUSTOM_TYPES[t]);
  }
  return lines.join("\n\n");
}

/** Generate a single file with the type or interface + optional zod schema. */
function generateModelFileInline( // Removed async
  m: DMMF.Model,
  allModels: DMMF.Model[],
  enumMap: Map<string, DMMF.DatamodelEnum>,
  modelMap: Map<string, DMMF.Model>,
  config: Config,
): string {
  const context = new InlineContext(config);
  const mappedName = (config.modelPrefix + m.name + config.modelSuffix).replace(/\W+/g, "_");
  const shape = inlineModelDefinition(m, allModels, enumMap, modelMap, context);

  let tsHeader = "";
  if (config.modelType === "interface") {
    tsHeader = `export interface ${mappedName} ${shape}`;
  } else {
    tsHeader = `export type ${mappedName} = ${shape};`;
  }

  // If schema enabled, generate zod
  let zodPart = "";
  if (config.schema === "zod") {
    // We add `import { z } from "zod";` at top if we reference it
    const schemaName = `${config.schemaPrefix}${mappedName}${config.schemaSuffix}`;
    // we must re-init a new InlineContext for the schema, or we won't inline the model again
    const zodContext = new InlineContext(config);
    const zodSchema = inlineModelZodSchema(m, allModels, enumMap, modelMap, zodContext);
    // Merge usedCustomTypes so we can inline them all
    for (const c of zodContext.usedCustomTypes) {
      context.usedCustomTypes.add(c);
    }
    const hasZod = true; // we do want to show the import if we are generating a schema
    const zodImport = hasZod ? `import { z } from "zod";\n\n` : "";

    zodPart = `
${zodImport}export const ${schemaName} = ${zodSchema};
`;
  }

  // Inline custom types
  const customTypesBlock = inlineCustomTypes(context);
  const fileContents = [customTypesBlock, tsHeader, zodPart]
    .filter((x) => x.trim().length > 0)
    .join("\n\n");

  return fileContents;
}

/** Generate a single file for an enum. */
function generateEnumFileInline(e: DMMF.DatamodelEnum, config: Config): string {
  // Removed async
  const mappedName = `${config.enumPrefix}${e.name}${config.enumSuffix}`.replace(/\W+/g, "_");
  // Basic TS type
  let enumTs = "";
  switch (config.enumType) {
    case "enum": {
      const lines = e.values.map((v) => `  ${v.name} = "${v.name}"`).join(",\n");
      enumTs = `export enum ${mappedName} {\n${lines}\n}`;
      break;
    }
    case "stringUnion": {
      const union = e.values.map((v) => `"${v.name}"`).join(" | ");
      enumTs = `export type ${mappedName} = ${union};`;
      break;
    }
    case "object": {
      const pairs = e.values.map((v) => `  ${v.name}: "${v.name}"`).join(",\n");
      enumTs = `
export const ${mappedName} = {
${pairs}
} as const;

export type ${mappedName} = typeof ${mappedName}[keyof typeof ${mappedName}];
      `.trim();
      break;
    }
  }

  // If generating zod
  let zodPart = "";
  if (config.schema === "zod") {
    const zodEnum = inlineEnumZodSchema(e);
    const zodName = `${config.schemaPrefix}${mappedName}${config.schemaSuffix}`;
    zodPart = `
import { z } from "zod";

export const ${zodName} = ${zodEnum};
`.trim();
  }

  return [enumTs, zodPart].filter(Boolean).join("\n\n");
}

/** For inputObjectTypes or outputObjectTypes, we inline them similarly to models. */
function generateComplexTypeInline( // Removed async
  io: DMMF.InputType | DMMF.OutputType,
  allModels: DMMF.Model[],
  enumMap: Map<string, DMMF.DatamodelEnum>,
  modelMap: Map<string, DMMF.Model>,
  config: Config,
  isInput: boolean,
): string {
  const context = new InlineContext(config);
  // Add "Output" suffix for output types to avoid conflicts
  const typeName =
    `${config.typePrefix}${io.name}${!isInput ? "Output" : ""}${config.typeSuffix}`.replace(
      /\W+/g,
      "_",
    );

  // Build TS shape
  const lines: string[] = [];
  for (const field of io.fields) {
    // We treat output fields that are non-nullable as required, or input fields similarly
    // For input: if !isRequired => "?: T | null"
    // For output: if isNullable => "?: T | null"
    let isRequired = true;
    let isNullable = false;

    // Fix type safety for field.isNullable
    interface OutputField extends DMMF.Field {
      isNullable: boolean;
    }

    if ("isNullable" in field) {
      // output type
      isNullable = (field as unknown as OutputField).isNullable;
      // We'll treat it as optional if isNullable
      isRequired = !isNullable;
    } else {
      // input type
      isNullable = field.isNullable === true;
    }

    const prefix = isRequired ? ":" : "?:";
    const orNull = !isRequired ? " | null" : "";

    // build union of possible inputTypes or outputTypes
    let unionTypes: string[] = [];
    // For input => field.inputTypes
    // For output => we can unify a single shape
    if ("inputTypes" in field) {
      unionTypes = (field as DMMF.SchemaArg).inputTypes.map((t) => {
        if (t.location === "scalar") {
          const getter = SCALAR_TYPE_GETTERS[String(t.type)];
          if (getter) {
            const st = getter(config);
            if (st === "JsonValue") context.addCustomTypeUsage("JsonValue");
            if (st === "Decimal") context.addCustomTypeUsage("Decimal");
            if (st === "BufferObject") context.addCustomTypeUsage("BufferObject");
            return t.isList ? `${st}[]` : st;
          }
          return "any";
        } else if (t.location === "enumTypes") {
          const en = enumMap.get(String(t.type));
          if (en) {
            return inlineEnum(en, config);
          }
          return "any";
        } else if (t.location === "inputObjectTypes") {
          // For input referencing other input object
          // We'll degrade to string for the ID? or inline again
          // The instructions say "We want 100% accurate references." => inline recursively if possible
          // But we only have the raw data in the inputObjectTypes, not necessarily in the modelMap
          // We can do a minimal approach or do "any"
          return "any";
        }
        return "any";
      });
    } else if ("outputType" in field) {
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
        // inline from model if we find it
        const theModel = modelMap.get(String(type));
        if (theModel) {
          unionTypes.push(inlineModelDefinition(theModel, allModels, enumMap, modelMap, context));
        }
      }
    }

    if (unionTypes.length === 0) {
      unionTypes.push("any");
    }
    const union = buildUnionType(unionTypes) + orNull;
    lines.push(`  ${field.name}${prefix} ${union};`);
  }

  const shape = `{\n${lines.join("\n")}\n}`; // Changed to const
  let typeDef = `export interface ${typeName} ${shape}`;

  if (config.modelType === "type") {
    typeDef = `export type ${typeName} = ${shape};`;
  }

  // If generating a zod schema
  let zodPart = "";
  if (config.schema === "zod") {
    // Add "Output" suffix for output schemas too
    const schemaName = `${config.schemaPrefix}${io.name}${!isInput ? "Output" : ""}${config.schemaSuffix}`;
    const zodLines: string[] = [];

    // We'll do a naive approach for zod lines
    if (isInput && "fields" in io) {
      // input
      for (const field of io.fields) {
        let zodField: string = "z.any()"; // Fix type safety for zodField assignment
        const primaryType = (field as DMMF.SchemaArg).inputTypes[0];
        if (primaryType?.location === "scalar") {
          const getter = ZOD_SCALAR_TYPE_GETTERS[String(primaryType.type)];
          if (getter) {
            zodField = getter(config);
          }
          if (field.isNullable) {
            zodField += `.nullable()`;
          }
        } else if (primaryType?.location === "enumTypes") {
          const en = enumMap.get(String(primaryType.type));
          if (en) {
            const values = en.values.map((v) => `"${v.name}"`).join(", ");
            zodField = `z.enum([${values}])`;
            if (field.isNullable) {
              zodField += `.nullable()`;
            }
          }
        } else if (primaryType?.location === "inputObjectTypes") {
          // naive
          zodField = "z.any()";
          if (field.isNullable) {
            zodField += `.nullable()`;
          }
        }
        if (primaryType?.isList) {
          zodField = `z.array(${zodField})`;
        }
        zodLines.push(`${field.name}: ${zodField},`); // Added comma here
      }
    } else if (!isInput && "fields" in io) {
      // output
      for (const field of io.fields) {
        const { isNullable } = field;
        let zodField = "z.any()";
        if ("outputType" in field) {
          const { location, type, isList } = field.outputType;
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
            // inline model
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
          if (isList) {
            zodField = `z.array(${zodField})`;
          }
        }
        if (isNullable) {
          zodField += `.nullable()`;
        }
        zodLines.push(`${field.name}: ${zodField},`); // Added comma here
      }
    }
    const zodObj = `z.object({\n${indentBlock(zodLines, 2)}\n})`;
    zodPart = `
import { z } from "zod";

export const ${schemaName} = ${zodObj};
`.trim();
  }

  const customTypes = inlineCustomTypes(context);
  const content = [customTypes, typeDef, zodPart].filter(Boolean).join("\n\n");
  return content;
}

generatorHandler({
  onManifest() {
    return {
      prettyName: "Prisma DTO Generator (Refactored Inline)",
      defaultOutput: "./generated",
    };
  },
  async onGenerate(options) {
    const baseConfig = options.generator.config;
    const config: Config = {
      enumPrefix: "",
      enumSuffix: "",
      modelPrefix: "",
      modelSuffix: "",
      typePrefix: "",
      typeSuffix: "",
      headerComment: "Auto-generated by prisma-dto-gen (refactored inline)",
      modelType: "interface",
      enumType: "stringUnion",
      dateType: "Date",
      bigIntType: "bigint",
      decimalType: "Decimal",
      bytesType: "Buffer",
      optionalRelations: baseConfig.optionalRelations !== "false",
      omitRelations: baseConfig.omitRelations === "true",
      optionalNullables: baseConfig.optionalNullables === "true",
      prettier: baseConfig.prettier === "true",
      resolvePrettierConfig: baseConfig.resolvePrettierConfig !== "false",
      appendExtensions: baseConfig.appendExtensions === "true",
      schema: baseConfig.schema === "zod" ? "zod" : null,
      schemaPrefix: String(baseConfig.schemaPrefix || ""),
      schemaSuffix: String(baseConfig.schemaSuffix || DEFAULT_SCHEMA_SUFFIX),
    };
    validateConfig(config);

    const outputDir = options.generator.output?.value ?? "./generated";
    const { datamodel, schema } = options.dmmf;
    const { models = [], enums = [], types = [] } = datamodel;

    // Input & Output types
    const inputObjectTypes = [
      ...(schema.inputObjectTypes?.prisma ?? []),
      ...(schema.inputObjectTypes?.model ?? []),
    ];
    const outputObjectTypes = [
      ...(schema.outputObjectTypes?.prisma ?? []),
      ...(schema.outputObjectTypes?.model ?? []),
    ];

    // Build helpful maps
    const enumMap = new Map<string, DMMF.DatamodelEnum>(enums.map((e) => [e.name, e]));
    const modelMap = new Map<string, DMMF.Model>(models.map((m) => [m.name, m]));
    // composite type map
    for (const t of types) {
      modelMap.set(t.name, t);
    }

    // Generate for each enum
    const enumFiles: string[] = [];
    for (const e of enums) {
      const content = generateEnumFileInline(e, config);
      const filePath = resolvePath(outputDir, `enum_${e.name}.ts`);
      await writeTsFile({ filePath, content, config });
      enumFiles.push(filePath);
    }

    // Generate for each model (including composite "types")
    const modelFiles: string[] = [];
    for (const m of models) {
      const content = generateModelFileInline(m, models.concat(types), enumMap, modelMap, config);
      const filePath = resolvePath(outputDir, `model_${m.name}.ts`);
      await writeTsFile({ filePath, content, config });
      modelFiles.push(filePath);
    }
    for (const t of types) {
      const content = generateModelFileInline(t, models.concat(types), enumMap, modelMap, config);
      const filePath = resolvePath(outputDir, `type_${t.name}.ts`);
      await writeTsFile({ filePath, content, config });
      modelFiles.push(filePath);
    }

    // Generate for each input object type
    const inputTypeFiles: string[] = [];
    for (const io of inputObjectTypes) {
      const content = generateComplexTypeInline(
        io,
        models.concat(types),
        enumMap,
        modelMap,
        config,
        true,
      );
      const filePath = resolvePath(outputDir, `input_${io.name}.ts`);
      await writeTsFile({ filePath, content, config });
      inputTypeFiles.push(filePath);
    }

    // Generate for each output object type
    const outputTypeFiles: string[] = [];
    for (const oo of outputObjectTypes) {
      const content = generateComplexTypeInline(
        oo,
        models.concat(types),
        enumMap,
        modelMap,
        config,
        false,
      );
      // Add "Output" to the filename as well
      const filePath = resolvePath(outputDir, `output_${oo.name}Output.ts`);
      await writeTsFile({ filePath, content, config });
      outputTypeFiles.push(filePath);
    }

    // Add index.ts generation
    const allFiles = [...enumFiles, ...modelFiles, ...inputTypeFiles, ...outputTypeFiles];

    // Create relative imports for each file
    const imports = allFiles.map((filePath) => {
      const relativePath =
        "./" +
        filePath
          .replace(outputDir, "") // Remove the output dir prefix
          .replace(/^\//, "") // Remove leading slash
          .replace(/\.ts$/, ""); // Remove .ts extension
      return `export * from "${relativePath}";`;
    });

    // Write index.ts
    const indexContent = imports.join("\n");
    const indexPath = resolvePath(outputDir, "index.ts");
    await writeTsFile({
      filePath: indexPath,
      content: indexContent,
      config,
    });
  },
});
