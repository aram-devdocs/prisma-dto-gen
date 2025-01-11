// Auto-generated by prisma-dto-gen (refactored inline)

export interface NestedIntFilter {
  equals?: any;
  in?: number[];
  notIn?: number[];
  lt?: any;
  lte?: any;
  gt?: any;
  gte?: any;
  not?: any;
}

import { z } from "zod";

export const NestedIntFilterSchema = z.object({
  equals: z.number().optional(),
  in: z.array(z.number()).optional(),
  notIn: z.array(z.number()).optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.number().optional(),
});