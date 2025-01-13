import type { DMMF } from "@prisma/generator-helper";
import type { Config } from "../config/config.js";
import { inlineEnumZodSchema } from "./zodHelpers.js";
import { InlineContext } from "../context/InlineContext.js";

/**
 * Renders an inline enum shape (for a single field) as TS.
 * (Used by fieldRenderer to inline an enum in a larger object.)
 */
export function inlineEnum(e: DMMF.DatamodelEnum, config: Config): string {
  switch (config.enumType) {
    case "enum": {
      const lines = e.values.map((v) => `  ${v.name} = "${v.name}"`).join(",\n");
      return `{\n${lines}\n}`;
    }
    case "stringUnion": {
      const union = e.values.map((v) => `"${v.name}"`).join(" | ");
      return union || "string";
    }
    case "object": {
      const pairs = e.values.map((v) => `  ${v.name}: "${v.name}"`).join(",\n");
      return `{\n${pairs}\n}`;
    }
    default:
      return "any";
  }
}

/**
 * Generates a standalone file for the enum (full `export type` or `export enum` + optional zod).
 */
export function generateEnumFileInline(e: DMMF.DatamodelEnum, config: Config): string {
  const context = new InlineContext(config);
  const mappedName = `${config.enumPrefix}${e.name}${config.enumSuffix}`.replace(/\W+/g, "_");

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
    default:
      enumTs = `export type ${mappedName} = string;`;
      break;
  }

  let zodPart = "";
  if (config.schema === "zod") {
    const zodName = `${config.schemaPrefix}${mappedName}${config.schemaSuffix}`;
    const zodEnum = inlineEnumZodSchema(e);
    zodPart = `
  import { z } from "zod";
  
  export const ${zodName} = ${zodEnum};
  `.trim();
  }

  return [enumTs, zodPart].filter(Boolean).join("\n\n");
}
