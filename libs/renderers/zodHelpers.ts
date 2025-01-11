import { indentBlock } from "../utils/indentBlock.ts";
import { InlineContext } from "../context/InlineContext.ts";
import { CUSTOM_TYPES } from "../consts/CUSTOM_TYPES.ts";
import type { Config } from "../config/config.ts";
import { renderZodFieldInline } from "./fieldRenderer.ts";
import { DMMF } from "@prisma/generator-helper";

/**
 * Inlines any custom types (JsonValue, Decimal, etc.) used in this InlineContext.
 */
export function inlineCustomTypes(context: InlineContext): string {
  if (context.usedCustomTypes.size === 0) return "";
  const lines: string[] = [];
  for (const t of context.usedCustomTypes) {
    lines.push(CUSTOM_TYPES[t]);
  }
  return lines.join("\n\n");
}

/**
 * Inlines a Prisma model into a z.object(...) schema.
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
 * Inlines an enum as z.enum([...]) in a zod schema.
 */
export function inlineEnumZodSchema(e: DMMF.DatamodelEnum): string {
  const values = e.values.map((v) => `"${v.name}"`).join(", ");
  return `z.enum([${values}])`;
}
