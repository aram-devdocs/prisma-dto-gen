// Auto-generated by prisma-dto-gen (refactored inline)

export interface NestedBoolNullableWithAggregatesFilter {
  equals?: any;
  not?: any;
  _count: any;
  _min: any;
  _max: any;
}

import { z } from "zod";

export const NestedBoolNullableWithAggregatesFilterSchema = z.object({
  equals: z.boolean().optional(),
  not: z.boolean().optional(),
  _count: z.any(),
  _min: z.any(),
  _max: z.any(),
});
