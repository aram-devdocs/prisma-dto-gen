// libs/consts/CUSTOM_TYPES.ts

export const CUSTOM_TYPES = {
  BufferObject: `type BufferObject = { type: "Buffer"; data: number[] };`,
  Decimal: `type Decimal = { valueOf(): string };`,
  JsonValue: `type JsonValue =
      | string
      | number
      | boolean
      | { [key: string]: Record<string, unknown> }
      | Record<string, unknown>[]
      | null;`,
} as const;
