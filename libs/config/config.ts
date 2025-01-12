// libs/config/config.ts

import type { DMMF } from "@prisma/generator-helper";

export interface Config {
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
  fileExtension: ".ts" | ".mts" | ".cts" | ".js" | ".mjs" | ".cjs" | null;
  maxDepth?: number;
}

export const DEFAULT_SCHEMA_SUFFIX = "Schema";
