// Auto-generated by prisma-dto-gen (refactored inline)

export interface DateTimeWithAggregatesFilter {
  equals?: any;
  in?: any;
  notIn?: any;
  lt?: any;
  lte?: any;
  gt?: any;
  gte?: any;
  not?: any;
  _count?: any;
  _min?: any;
  _max?: any;
}

import { z } from "zod";

export const DateTimeWithAggregatesFilterSchema = z.object({
  equals: z.date().optional(),
  in: z.array(z.date()).optional(),
  notIn: z.array(z.date()).optional(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.date().optional(),
  _count: z.any().optional(),
  _min: z.any().optional(),
  _max: z.any().optional(),
});
