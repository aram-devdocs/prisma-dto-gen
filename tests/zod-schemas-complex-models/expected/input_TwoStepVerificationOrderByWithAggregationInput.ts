// Auto-generated by prisma-dto-gen (refactored inline)

export interface TwoStepVerificationOrderByWithAggregationInput {
  verification_id?: any;
  profile_id?: any;
  code?: any;
  is_verified?: any;
  created_at?: any;
  verification_type?: any;
  _count?: any;
  _max?: any;
  _min?: any;
}

import { z } from "zod";

export const TwoStepVerificationOrderByWithAggregationInputSchema = z.object({
  verification_id: z.any().optional(),
  profile_id: z.any().optional(),
  code: z.any().optional(),
  is_verified: z.any().optional(),
  created_at: z.any().optional(),
  verification_type: z.any().optional(),
  _count: z.any().optional(),
  _max: z.any().optional(),
  _min: z.any().optional(),
});
