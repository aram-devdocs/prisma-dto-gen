export function buildUnionType(types: string[]): string {
  const unique = new Set(types);
  if (unique.has("any") && unique.size > 1) {
    unique.clear();
    unique.add("any");
  }
  if (unique.size === 0) return "any";
  const arr = [...unique];
  return arr.length === 1 ? arr[0] : `(${arr.join(" | ")})`;
}
