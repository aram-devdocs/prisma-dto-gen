// Auto-generated by prisma-dto-gen (refactored inline)

export interface DateTimeNullableFilter {
  equals?: any;
  in?: any;
  notIn?: any;
  lt?: any;
  lte?: any;
  gt?: any;
  gte?: any;
  not?: any;
}

import { z } from "zod";

export const DateTimeNullableFilterSchema = z.object({
  equals: z.date().nullable().optional(),
  in: z.array(z.date()).nullable().optional(),
  notIn: z.array(z.date()).nullable().optional(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.date().nullable().optional(),
});
