// Auto-generated by prisma-dto-gen (refactored inline)

export interface NestedBoolNullableFilter {
  equals?: any | null;
  not?: any | null;
}

import { z } from "zod";

export const NestedBoolNullableFilterSchema = z.object({
  equals: z.boolean().nullable(),
  not: z.boolean().nullable(),
});