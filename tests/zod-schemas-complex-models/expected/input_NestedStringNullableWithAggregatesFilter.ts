// Auto-generated by prisma-dto-gen (refactored inline)

export interface NestedStringNullableWithAggregatesFilter {
  equals?: any | null;
  in?: any | null;
  notIn?: any | null;
  lt: any;
  lte: any;
  gt: any;
  gte: any;
  contains: any;
  startsWith: any;
  endsWith: any;
  not?: any | null;
  _count: any;
  _min: any;
  _max: any;
}

import { z } from "zod";

export const NestedStringNullableWithAggregatesFilterSchema = z.object({
  equals: z.string().nullable(),
  in: z.array(z.string()).nullable(),
  notIn: z.array(z.string()).nullable(),
  lt: z.string(),
  lte: z.string(),
  gt: z.string(),
  gte: z.string(),
  contains: z.string(),
  startsWith: z.string(),
  endsWith: z.string(),
  not: z.string().nullable(),
  _count: z.any(),
  _min: z.any(),
  _max: z.any(),
});
