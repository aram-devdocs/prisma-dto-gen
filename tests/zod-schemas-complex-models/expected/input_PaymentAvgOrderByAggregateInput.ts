// Auto-generated by prisma-dto-gen (refactored inline)

export interface PaymentAvgOrderByAggregateInput {
  amount?: any;
}

import { z } from "zod";

export const PaymentAvgOrderByAggregateInputSchema = z.object({
  amount: z.any().optional(),
});
