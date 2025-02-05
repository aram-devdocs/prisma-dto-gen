// Auto-generated by prisma-dto-gen (refactored inline)

type Decimal = { valueOf(): string };

export interface ManyPaymentAndReturnCreateArgs {
  data:
    | {
        payment_id?: string;
        payer_id: string;
        amount: Decimal;
        paid_at?: Date;
        status?: "DRAFT" | "REVIEW" | "PUBLISHED" | "ARCHIVED";
        reference_note?: any;
      }
    | any /* circular reference to PaymentCreateManyInput */;
  skipDuplicates?: boolean;
}

import { z } from "zod";

export const ManyPaymentAndReturnCreateArgsSchema = z.object({
  data: z.any(),
  skipDuplicates: z.boolean().optional(),
});
