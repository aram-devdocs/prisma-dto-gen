// Auto-generated by prisma-dto-gen

import { z } from "zod";

export const StringFilterSchema = z.object({
  equals: z.string().nullable(),
  in: z.array(z.string()).nullable(),
  notIn: z.array(z.string()).nullable(),
  lt: z.string().nullable(),
  lte: z.string().nullable(),
  gt: z.string().nullable(),
  gte: z.string().nullable(),
  contains: z.string().nullable(),
  startsWith: z.string().nullable(),
  endsWith: z.string().nullable(),
  not: z.string().nullable(),
});
