// Auto-generated by prisma-dto-gen (refactored inline)

export interface TwoStepVerificationOrderByWithAggregationInput {
  verification_id: any;
  profile_id: any;
  code: any;
  is_verified: any;
  created_at: any;
  verification_type: any;
  _count: any;
  _max: any;
  _min: any;
}

import { z } from "zod";

export const TwoStepVerificationOrderByWithAggregationInputSchema = z.object({
  verification_id: z.any(),
  profile_id: z.any(),
  code: z.any(),
  is_verified: z.any(),
  created_at: z.any(),
  verification_type: z.any(),
  _count: z.any(),
  _max: z.any(),
  _min: z.any(),
});
