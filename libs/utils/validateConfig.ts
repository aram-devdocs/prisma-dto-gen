import { Config } from "../config/config.js";

export function validateConfig(config: Config) {
  const errors: string[] = [];

  // fileExtension is used for imports, can be null or a supported extension
  if (
    typeof config.fileExtension === "string" &&
    ![".ts", ".mts", ".cts", ".js", ".mjs", ".cjs", null].includes(config.fileExtension)
  ) {
    errors.push(`Invalid fileExtension: ${config.fileExtension}`);
  }

  // outputFileExtension is used for the actual file extension when saving
  if (
    ![".ts", ".d.ts", ".mts", ".cts", ".js", ".mjs", ".cjs"].includes(config.outputFileExtension)
  ) {
    errors.push(`Invalid outputFileExtension: ${config.outputFileExtension}`);
  }

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
