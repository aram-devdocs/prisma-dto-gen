// Auto-generated by prisma-dto-gen (refactored inline)

export interface PaymentCreateManyPayerInputEnvelope {
  data: any;
  skipDuplicates: boolean;
}

import { z } from "zod";

export const PaymentCreateManyPayerInputEnvelopeSchema = z.object({
  data: z.any(),
  skipDuplicates: z.boolean(),
});