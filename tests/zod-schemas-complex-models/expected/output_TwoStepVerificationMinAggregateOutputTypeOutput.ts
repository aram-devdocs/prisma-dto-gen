// Auto-generated by prisma-dto-gen (refactored inline)

export interface TwoStepVerificationMinAggregateOutputTypeOutput {
  verification_id?: string | null;
  profile_id?: string | null;
  code?: string | null;
  is_verified?: boolean | null;
  created_at?: Date | null;
  verification_type?: "EMAIL" | "SMS" | "PUSH" | null;
}

import { z } from "zod";

export const TwoStepVerificationMinAggregateOutputTypeOutputSchema = z.object({
  verification_id: z.string().nullable(),
  profile_id: z.string().nullable(),
  code: z.string().nullable(),
  is_verified: z.boolean().nullable(),
  created_at: z.date().nullable(),
  verification_type: z.enum(["EMAIL", "SMS", "PUSH"]).nullable(),
});
