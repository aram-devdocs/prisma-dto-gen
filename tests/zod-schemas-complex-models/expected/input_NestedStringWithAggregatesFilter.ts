// Auto-generated by prisma-dto-gen (refactored inline)

export interface NestedStringWithAggregatesFilter {
  equals: any;
  in: any;
  notIn: any;
  lt: any;
  lte: any;
  gt: any;
  gte: any;
  contains: any;
  startsWith: any;
  endsWith: any;
  not: any;
  _count: any;
  _min: any;
  _max: any;
}

import { z } from "zod";

export const NestedStringWithAggregatesFilterSchema = z.object({
  equals: z.string(),
  in: z.array(z.string()),
  notIn: z.array(z.string()),
  lt: z.string(),
  lte: z.string(),
  gt: z.string(),
  gte: z.string(),
  contains: z.string(),
  startsWith: z.string(),
  endsWith: z.string(),
  not: z.string(),
  _count: z.any(),
  _min: z.any(),
  _max: z.any(),
});