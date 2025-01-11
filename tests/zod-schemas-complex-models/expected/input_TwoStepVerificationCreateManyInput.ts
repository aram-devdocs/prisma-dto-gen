// Auto-generated by prisma-dto-gen (refactored inline)

export interface TwoStepVerificationCreateManyInput {
  verification_id: string;
  profile_id: string;
  code?: any | null;
  is_verified: boolean;
  created_at: Date;
  verification_type: "EMAIL" | "SMS" | "PUSH";
}

import { z } from "zod";

export const TwoStepVerificationCreateManyInputSchema = z.object({
  verification_id: z.string(),
  profile_id: z.string(),
  code: z.string().nullable(),
  is_verified: z.boolean(),
  created_at: z.date(),
  verification_type: z.enum(["EMAIL", "SMS", "PUSH"]),
});
