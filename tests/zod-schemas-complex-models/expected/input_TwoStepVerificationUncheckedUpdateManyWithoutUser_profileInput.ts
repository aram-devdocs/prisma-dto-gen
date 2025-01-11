// Auto-generated by prisma-dto-gen (refactored inline)

export interface TwoStepVerificationUncheckedUpdateManyWithoutUser_profileInput {
  verification_id: any;
  code?: any | null;
  is_verified: any;
  created_at: any;
  verification_type: any;
}

import { z } from "zod";

export const TwoStepVerificationUncheckedUpdateManyWithoutUser_profileInputSchema = z.object({
  verification_id: z.string(),
  code: z.string().nullable(),
  is_verified: z.boolean(),
  created_at: z.date(),
  verification_type: z.enum(["EMAIL", "SMS", "PUSH"]),
});