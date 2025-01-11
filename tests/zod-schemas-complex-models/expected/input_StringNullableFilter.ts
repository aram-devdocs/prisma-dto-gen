// Auto-generated by prisma-dto-gen (refactored inline)

export interface StringNullableFilter {
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
  mode: any;
  not?: any | null;
}

import { z } from "zod";

export const StringNullableFilterSchema = z.object({
  equals: z.string().nullable(),
  in: z.array(z.string().nullable()),
  notIn: z.array(z.string().nullable()),
  lt: z.string(),
  lte: z.string(),
  gt: z.string(),
  gte: z.string(),
  contains: z.string(),
  startsWith: z.string(),
  endsWith: z.string(),
  mode: z.any(),
  not: z.string().nullable(),
});
