// Auto-generated by prisma-dto-gen (refactored inline)

export interface NestedBoolNullableWithAggregatesFilter {
  equals?: any;
  not?: any;
  _count?: any;
  _min?: any;
  _max?: any;
}

import { z } from "zod";

export const NestedBoolNullableWithAggregatesFilterSchema = z.object({
  equals: z.boolean().nullable().optional(),
  not: z.boolean().nullable().optional(),
  _count: z.any().optional(),
  _min: z.any().optional(),
  _max: z.any().optional(),
});
