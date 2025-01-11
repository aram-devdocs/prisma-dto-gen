// Auto-generated by prisma-dto-gen (refactored inline)

export interface DateTimeNullableFilter {
  equals?: any;
  in?: any;
  notIn?: any;
  lt: any;
  lte: any;
  gt: any;
  gte: any;
  not?: any;
}

import { z } from "zod";

export const DateTimeNullableFilterSchema = z.object({
  equals: z.date().optional(),
  in: z.array(z.date()).optional(),
  notIn: z.array(z.date()).optional(),
  lt: z.date(),
  lte: z.date(),
  gt: z.date(),
  gte: z.date(),
  not: z.date().optional(),
});
