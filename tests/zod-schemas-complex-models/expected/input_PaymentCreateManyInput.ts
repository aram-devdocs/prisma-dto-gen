// Auto-generated by prisma-dto-gen (refactored inline)

type Decimal = { valueOf(): string };

export interface PaymentCreateManyInput {
  payment_id?: string;
  payer_id: string;
  amount: Decimal;
  paid_at?: Date;
  status?: "DRAFT" | "REVIEW" | "PUBLISHED" | "ARCHIVED";
  reference_note?: any;
}

import { z } from "zod";

export const PaymentCreateManyInputSchema = z.object({
  payment_id: z.string().optional(),
  payer_id: z.string(),
  amount: z.any(),
  paid_at: z.date().optional(),
  status: z.enum(["DRAFT", "REVIEW", "PUBLISHED", "ARCHIVED"]).optional(),
  reference_note: z.string().nullable().optional(),
});
