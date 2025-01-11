import type { DMMF } from "@prisma/generator-helper";
import { InlineContext } from "../context/InlineContext.ts";
import type { Config } from "../config/config.ts";
import { renderFieldTypeInline } from "./fieldRenderer.ts";
import { inlineModelZodSchema, inlineCustomTypes } from "./zodHelpers.ts";
import { indentBlock } from "../utils/indentBlock.ts";
/**
 * Recursively inlines a model as a TS shape.
 * Avoids infinite recursion by checking InlineContext.visitedTypes.
 */
export function inlineModelDefinition(
  m: DMMF.Model,
  allModels: DMMF.Model[],
  enumMap: Map<string, DMMF.DatamodelEnum>,
  modelMap: Map<string, DMMF.Model>,
  context: InlineContext,
): string {
  const { config } = context;
  const mappedName = (config.modelPrefix + m.name + config.modelSuffix).replace(/\W+/g, "_");

  if (context.isVisited(mappedName)) {
    return `any /* circular reference to ${mappedName} */`;
  }
  context.markVisited(mappedName);

  const fieldLines: string[] = [];
  for (const field of m.fields) {
    const { name, isRequired } = field;
    const isOptional = !isRequired;
    const lineKey = isOptional ? `${name}?:` : `${name}:`;
    let orNull = "";

    if (!isRequired) {
      orNull = " | null";
    }

    const fieldTs = renderFieldTypeInline(field, allModels, enumMap, modelMap, context) + orNull;
    fieldLines.push(`${lineKey} ${fieldTs};`);
  }

  const body = `{\n${indentBlock(fieldLines, 2)}\n}`;
  if (config.modelType === "interface") {
    return body;
  }
  return body;
}

/**
 * Generates a single file exporting a model type/interface plus optional Zod schema.
 */
export function generateModelFileInline(
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

  let zodPart = "";
  if (config.schema === "zod") {
    const zodContext = new InlineContext(config);
    const zodSchema = inlineModelZodSchema(m, allModels, enumMap, modelMap, zodContext);

    // Merge used custom types
    for (const c of zodContext.usedCustomTypes) {
      context.addCustomTypeUsage(c);
    }

    const schemaName = `${config.schemaPrefix}${mappedName}${config.schemaSuffix}`;
    const zodImport = `import { z } from "zod";\n\n`;

    zodPart = `
  ${zodImport}export const ${schemaName} = ${zodSchema};
  `;
  }

  const customTypesBlock = inlineCustomTypes(context);
  const fileContents = [customTypesBlock, tsHeader, zodPart]
    .filter((x) => x.trim().length > 0)
    .join("\n\n");

  return fileContents;
}
