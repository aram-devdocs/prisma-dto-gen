// Auto-generated by prisma-dto-gen (refactored inline)

export interface NestedBoolNullableFilter {
  equals?: any;
  not?: any;
}

import { z } from "zod";

export const NestedBoolNullableFilterSchema = z.object({
  equals: z.boolean().nullable().optional(),
  not: z.boolean().nullable().optional(),
});
