// Auto-generated by prisma-dto-gen (refactored inline)

export interface NestedDateTimeWithAggregatesFilter {
  equals: any;
  in: any;
  notIn: any;
  lt: any;
  lte: any;
  gt: any;
  gte: any;
  not: any;
  _count: any;
  _min: any;
  _max: any;
}

import { z } from "zod";

export const NestedDateTimeWithAggregatesFilterSchema = z.object({
  equals: z.date(),
  in: z.array(z.date()),
  notIn: z.array(z.date()),
  lt: z.date(),
  lte: z.date(),
  gt: z.date(),
  gte: z.date(),
  not: z.date(),
  _count: z.any(),
  _min: z.any(),
  _max: z.any(),
});
