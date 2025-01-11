// Auto-generated by prisma-dto-gen (refactored inline)

export interface NestedEnumAccountLevelNullableWithAggregatesFilter {
  equals?: any | null;
  in?: any | null;
  notIn?: any | null;
  not?: any | null;
  _count: any;
  _min: any;
  _max: any;
}

import { z } from "zod";

export const NestedEnumAccountLevelNullableWithAggregatesFilterSchema = z.object({
  equals: z.enum(["BASIC", "PREMIUM", "ADMIN"]).nullable(),
  in: z.array(z.enum(["BASIC", "PREMIUM", "ADMIN"]).nullable()),
  notIn: z.array(z.enum(["BASIC", "PREMIUM", "ADMIN"]).nullable()),
  not: z.enum(["BASIC", "PREMIUM", "ADMIN"]).nullable(),
  _count: z.any(),
  _min: z.any(),
  _max: z.any(),
});
