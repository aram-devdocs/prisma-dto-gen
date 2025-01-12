// Auto-generated by prisma-dto-gen (refactored inline)

export interface TwoStepVerificationScalarWhereWithAggregatesInput {
  AND?:
    | {
        AND?: any /* circular reference to TwoStepVerificationScalarWhereWithAggregatesInput */;
        OR?: any /* circular reference to TwoStepVerificationScalarWhereWithAggregatesInput */;
        NOT?: any /* circular reference to TwoStepVerificationScalarWhereWithAggregatesInput */;
        verification_id?: any;
        profile_id?: any;
        code?: any;
        is_verified?: any;
        created_at?: any;
        verification_type?: any;
      }
    | any /* circular reference to TwoStepVerificationScalarWhereWithAggregatesInput */;
  OR?: any /* circular reference to TwoStepVerificationScalarWhereWithAggregatesInput */;
  NOT?: any /* circular reference to TwoStepVerificationScalarWhereWithAggregatesInput */;
  verification_id?: any;
  profile_id?: any;
  code?: any;
  is_verified?: any;
  created_at?: any;
  verification_type?: any;
}

import { z } from "zod";

export const TwoStepVerificationScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.any().optional(),
  OR: z.array(z.any()).optional(),
  NOT: z.any().optional(),
  verification_id: z.any().optional(),
  profile_id: z.any().optional(),
  code: z.any().nullable().optional(),
  is_verified: z.any().optional(),
  created_at: z.any().optional(),
  verification_type: z.any().optional(),
});
