// Auto-generated by prisma-dto-gen (refactored inline)

type Decimal = { valueOf(): string };

export interface PaymentSumAggregateOutputTypeOutput {
  amount?: Decimal;
}

import { z } from "zod";

export const PaymentSumAggregateOutputTypeOutputSchema = z.object({
  amount: z.any().optional(),
});
