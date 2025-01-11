// Auto-generated by prisma-dto-gen (refactored inline)

export interface PaymentMinOrderByAggregateInput {
  payment_id?: any;
  payer_id?: any;
  amount?: any;
  paid_at?: any;
  status?: any;
  reference_note?: any;
}

import { z } from "zod";

export const PaymentMinOrderByAggregateInputSchema = z.object({
  payment_id: z.any().optional(),
  payer_id: z.any().optional(),
  amount: z.any().optional(),
  paid_at: z.any().optional(),
  status: z.any().optional(),
  reference_note: z.any().optional(),
});
