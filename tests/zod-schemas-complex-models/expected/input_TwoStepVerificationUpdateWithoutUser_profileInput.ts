// Auto-generated by prisma-dto-gen (refactored inline)

export interface TwoStepVerificationUpdateWithoutUser_profileInput {
  verification_id: any;
  code?: any;
  is_verified: any;
  created_at: any;
  verification_type: any;
}

import { z } from "zod";

export const TwoStepVerificationUpdateWithoutUser_profileInputSchema = z.object({
  verification_id: z.string(),
  code: z.string().optional(),
  is_verified: z.boolean(),
  created_at: z.date(),
  verification_type: z.enum(["EMAIL", "SMS", "PUSH"]),
});
