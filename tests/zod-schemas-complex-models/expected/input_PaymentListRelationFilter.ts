// Auto-generated by prisma-dto-gen (refactored inline)

export interface PaymentListRelationFilter {
  every: any;
  some: any;
  none: any;
}

import { z } from "zod";

export const PaymentListRelationFilterSchema = z.object({
  every: z.any(),
  some: z.any(),
  none: z.any(),
});