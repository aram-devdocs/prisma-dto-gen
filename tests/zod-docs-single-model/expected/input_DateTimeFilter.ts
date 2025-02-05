// Auto-generated by prisma-dto-gen (refactored inline)

export interface DateTimeFilter {
  equals?: any;
  in?: Date[];
  notIn?: Date[];
  lt?: any;
  lte?: any;
  gt?: any;
  gte?: any;
  not?: any;
}

import { z } from "zod";

export const DateTimeFilterSchema = z.object({
  equals: z.date().optional(),
  in: z.array(z.date()).optional(),
  notIn: z.array(z.date()).optional(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.date().optional(),
});
