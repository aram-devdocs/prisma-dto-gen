// Auto-generated by prisma-dto-gen (refactored inline)

export interface PaymentOrderByRelationAggregateInput {
  _count?: any;
}

import { z } from "zod";

export const PaymentOrderByRelationAggregateInputSchema = z.object({
  _count: z.any().optional(),
});
