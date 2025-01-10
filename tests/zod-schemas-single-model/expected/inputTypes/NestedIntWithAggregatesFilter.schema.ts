// Auto-generated by prisma-dto-gen

import { z } from "zod";

export const NestedIntWithAggregatesFilterSchema = z.object({
  equals: z.number().nullable(),
  in: z.array(z.number()).nullable(),
  notIn: z.array(z.number()).nullable(),
  lt: z.number().nullable(),
  lte: z.number().nullable(),
  gt: z.number().nullable(),
  gte: z.number().nullable(),
  not: z.number().nullable(),
  _count: z.any().nullable(),
  _avg: z.any().nullable(),
  _sum: z.any().nullable(),
  _min: z.any().nullable(),
  _max: z.any().nullable(),
});
