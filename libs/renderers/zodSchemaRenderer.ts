import type { DMMF } from "@prisma/generator-helper";
import { InlineContext } from "../context/InlineContext.js";
import type { Config } from "../config/config.js";
import { renderZodFieldInline } from "./fieldRenderer.js";
import { inlineCustomTypes } from "./zodHelpers.js";
import { indentBlock } from "../utils/indentBlock.js";

/**
 * Recursively inlines a model as a Zod schema.
 * Avoids infinite recursion by checking InlineContext.visitedTypes.
 */
export function inlineModelZodSchema(
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
    if (!isRequired) {
      zodType += `.nullable()`;
    }
    fieldLines.push(`${name}: ${zodType},`);
  }

  return `z.object({\n${indentBlock(fieldLines, 2)}\n})`;
}

/**
 * Generates a single file exporting a model Zod schema.
 */
export function generateZodSchemaFileInline(
  m: DMMF.Model,
  allModels: DMMF.Model[],
  enumMap: Map<string, DMMF.DatamodelEnum>,
  modelMap: Map<string, DMMF.Model>,
  config: Config,
): string {
  const context = new InlineContext(config);
  const mappedName = (config.modelPrefix + m.name + config.modelSuffix).replace(/\W+/g, "_");
  const zodSchema = inlineModelZodSchema(m, allModels, enumMap, modelMap, context);

  const schemaName = `${config.schemaPrefix}${mappedName}${config.schemaSuffix}`;
  const zodImport = `import { z } from "zod";\n\n`;

  const zodPart = `
  ${zodImport}export const ${schemaName} = ${zodSchema};
  `;

  const customTypesBlock = inlineCustomTypes(context);
  const fileContents = [customTypesBlock, zodPart]
    .filter((x) => x.trim().length > 0)
    .join("\n\n");

  return fileContents;
}
