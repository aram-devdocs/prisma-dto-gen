// Auto-generated by prisma-dto-gen (refactored inline)

type Decimal = { valueOf(): string };

export interface PaymentUncheckedCreateInput {
  payment_id: string;
  payer_id: string;
  amount: Decimal;
  paid_at: Date;
  status: "DRAFT" | "REVIEW" | "PUBLISHED" | "ARCHIVED";
  reference_note?: any;
}

import { z } from "zod";

export const PaymentUncheckedCreateInputSchema = z.object({
  payment_id: z.string(),
  payer_id: z.string(),
  amount: z.any(),
  paid_at: z.date(),
  status: z.enum(["DRAFT", "REVIEW", "PUBLISHED", "ARCHIVED"]),
  reference_note: z.string().optional(),
});
