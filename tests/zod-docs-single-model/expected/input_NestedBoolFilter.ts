// Auto-generated by prisma-dto-gen (refactored inline)

export interface NestedBoolFilter {
  equals?: any;
  not?: any;
}

import { z } from "zod";

export const NestedBoolFilterSchema = z.object({
  equals: z.boolean().optional(),
  not: z.boolean().optional(),
});