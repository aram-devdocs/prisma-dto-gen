// Auto-generated by prisma-dto-gen (refactored inline)

type Decimal = { valueOf(): string };

export interface PaymentUncheckedUpdateWithoutPayerInput {
  payment_id: any;
  amount: any;
  paid_at: any;
  status: any;
  reference_note?: any | null;
}

import { z } from "zod";

export const PaymentUncheckedUpdateWithoutPayerInputSchema = z.object({
  payment_id: z.string(),
  amount: z.any(),
  paid_at: z.date(),
  status: z.enum(["DRAFT", "REVIEW", "PUBLISHED", "ARCHIVED"]),
  reference_note: z.string().nullable(),
});