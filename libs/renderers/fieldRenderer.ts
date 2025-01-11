import type { DMMF } from "@prisma/generator-helper";
import { SCALAR_TYPE_GETTERS } from "../consts/SCALAR_TYPE_GETTERS.js";
import { ZOD_SCALAR_TYPE_GETTERS } from "../consts/ZOD_SCALAR_TYPE_GETTERS.js";
import type { InlineContext } from "../context/InlineContext.js";
import { inlineEnum } from "./enumRenderer.js";
import { inlineModelDefinition } from "./modelRenderer.js";
import type { Config } from "../config/config.js";
/**
 * Renders the inline TS type for a Prisma field (scalar, enum, or object).
 */
export function renderFieldTypeInline(
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
      tsType = "never";
    }
  }

  if (isList) {
    tsType += "[]";
  }
  return tsType;
}

/**
 * Renders Zod type for a single Prisma field (scalar, enum, or object).
 */
export function renderZodFieldInline(
  field: DMMF.Field,
  allModels: DMMF.Model[],
  enumMap: Map<string, DMMF.DatamodelEnum>,
  modelMap: Map<string, DMMF.Model>,
  context: InlineContext,
): string {
  const { config } = context;
  if (!config.schema) return "z.any()";

  const { kind, type, isList } = field;
  let zodType = "z.any()";

  if (kind === "scalar") {
    const getter = ZOD_SCALAR_TYPE_GETTERS[type];
    if (getter) {
      zodType = getter(config);
    }
  } else if (kind === "enum") {
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
        // inline that model’s zod schema
        // We'll rely on inlineModelZodSchema from the modelRenderer or zodHelpers:
        // To avoid a circular import, we often handle it in zodHelpers or modelRenderer.
        // For clarity here, we'll just do "z.any()" if you prefer no cross-file references.
        zodType = "z.any()";
      }
    }
  }

  if (isList) {
    zodType = `z.array(${zodType})`;
  }
  return zodType;
}
