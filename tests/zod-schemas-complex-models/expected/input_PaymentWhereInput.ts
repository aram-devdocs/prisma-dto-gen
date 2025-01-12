// Auto-generated by prisma-dto-gen (refactored inline)

type Decimal = { valueOf(): string };

export interface PaymentWhereInput {
  AND?:
    | {
        AND?: any /* circular reference to PaymentWhereInput */;
        OR?: any /* circular reference to PaymentWhereInput */;
        NOT?: any /* circular reference to PaymentWhereInput */;
        payment_id?: any;
        payer_id?: any;
        amount?: any;
        paid_at?: any;
        status?: any;
        reference_note?: any;
        payer?: any;
      }
    | any /* circular reference to PaymentWhereInput */;
  OR?: any /* circular reference to PaymentWhereInput */;
  NOT?: any /* circular reference to PaymentWhereInput */;
  payment_id?: any;
  payer_id?: any;
  amount?: any;
  paid_at?: any;
  status?: any;
  reference_note?: any;
  payer?: any;
}

import { z } from "zod";

export const PaymentWhereInputSchema = z.object({
  AND: z.any().optional(),
  OR: z.array(z.any()).optional(),
  NOT: z.any().optional(),
  payment_id: z.any().optional(),
  payer_id: z.any().optional(),
  amount: z.any().optional(),
  paid_at: z.any().optional(),
  status: z.any().optional(),
  reference_note: z.any().nullable().optional(),
  payer: z.any().optional(),
});
