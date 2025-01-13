import { Config } from "../config/config.js";

export function validateConfig(config: Config) {
  const errors: string[] = [];

  // if config.fileExtension is passed as a string but does not match one of the Config['fileExtension'] values, throw an error
  if (
    typeof config.fileExtension === "string" &&
    ![".ts", ".mts", ".cts", ".js", ".mjs", ".cjs", null].includes(config.fileExtension)
  ) {
    errors.push(`Invalid fileExtension: ${config.fileExtension}`);
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
