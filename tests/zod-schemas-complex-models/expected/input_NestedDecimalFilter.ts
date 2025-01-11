// Auto-generated by prisma-dto-gen (refactored inline)

type Decimal = { valueOf(): string };

export interface NestedDecimalFilter {
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

export const NestedDecimalFilterSchema = z.object({
  equals: z.any().optional(),
  in: z.array(z.any()).optional(),
  notIn: z.array(z.any()).optional(),
  lt: z.any().optional(),
  lte: z.any().optional(),
  gt: z.any().optional(),
  gte: z.any().optional(),
  not: z.any().optional(),
});
