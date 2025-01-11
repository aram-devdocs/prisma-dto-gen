// Auto-generated by prisma-dto-gen (refactored inline)

export interface BoolWithAggregatesFilter {
  equals?: any;
  not?: any;
  _count?: any;
  _min?: any;
  _max?: any;
}

import { z } from "zod";

export const BoolWithAggregatesFilterSchema = z.object({
  equals: z.boolean().optional(),
  not: z.boolean().optional(),
  _count: z.any().optional(),
  _min: z.any().optional(),
  _max: z.any().optional(),
});