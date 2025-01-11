export function indentBlock(lines: string[], indentSize = 2): string {
  const indent = " ".repeat(indentSize);
  return lines.map((line) => indent + line).join("\n");
}
