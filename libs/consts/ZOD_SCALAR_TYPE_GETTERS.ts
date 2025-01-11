import type { Config } from "../config/config.js";
import { SCALAR_TYPE_GETTERS } from "./SCALAR_TYPE_GETTERS.js";

export const ZOD_SCALAR_TYPE_GETTERS: Record<string, (config: Config) => string> = {
  String: () => "z.string()",
  Boolean: () => "z.boolean()",
  Int: () => "z.number()",
  Float: () => "z.number()",
  Json: () => "z.any()",
  DateTime: (c) => (c.dateType === "Date" ? "z.date()" : "z.string()"),
  BigInt: (c) => (c.bigIntType === "bigint" ? "z.bigint()" : "z.string()"),
  Decimal: () => "z.any()",
  Bytes: () => "z.any()",
};
