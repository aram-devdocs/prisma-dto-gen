// Auto-generated by prisma-dto-gen (refactored inline)

export interface TwoStepVerificationWhereUniqueInput {
  verification_id?: string;
  AND?: any;
  OR?: any;
  NOT?: any;
  profile_id?: any;
  code?: any;
  is_verified?: any;
  created_at?: any;
  verification_type?: any;
  user_profile?: any;
}

import { z } from "zod";

export const TwoStepVerificationWhereUniqueInputSchema = z.object({
  verification_id: z.string().optional(),
  AND: z.any().optional(),
  OR: z.array(z.any()).optional(),
  NOT: z.any().optional(),
  profile_id: z.any().optional(),
  code: z.any().nullable().optional(),
  is_verified: z.any().optional(),
  created_at: z.any().optional(),
  verification_type: z.any().optional(),
  user_profile: z.any().optional(),
});
