export function toPascalCase(str: string): string {
  return str
    .split(/(?=[A-Z])|_|\s/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join("");
}

export function modelOperationName(modelName: string, operation: string): string {
  return `${toPascalCase(modelName)}${toPascalCase(operation)}Args`;
}
