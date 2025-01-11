// libs/consts/SCALAR_TYPE_GETTERS.ts

import type { Config } from "../config/config.js";

export const SCALAR_TYPE_GETTERS: Record<string, (config: Config) => string> = {
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
