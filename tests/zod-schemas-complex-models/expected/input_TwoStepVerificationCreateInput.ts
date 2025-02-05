// Auto-generated by prisma-dto-gen (refactored inline)

export interface TwoStepVerificationCreateInput {
  verification_id?: string;
  code?: any;
  is_verified?: boolean;
  created_at?: Date;
  verification_type: "EMAIL" | "SMS" | "PUSH";
  user_profile: any;
}

import { z } from "zod";

export const TwoStepVerificationCreateInputSchema = z.object({
  verification_id: z.string().optional(),
  code: z.string().nullable().optional(),
  is_verified: z.boolean().optional(),
  created_at: z.date().optional(),
  verification_type: z.enum(["EMAIL", "SMS", "PUSH"]),
  user_profile: z.any(),
});
