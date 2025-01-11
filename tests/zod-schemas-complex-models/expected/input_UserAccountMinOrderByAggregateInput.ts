// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserAccountMinOrderByAggregateInput {
  account_id: any;
  owner_profile_id: any;
  name: any;
  created_at: any;
  modified_at: any;
  is_active: any;
}

import { z } from "zod";

export const UserAccountMinOrderByAggregateInputSchema = z.object({
  account_id: z.any(),
  owner_profile_id: z.any(),
  name: z.any(),
  created_at: z.any(),
  modified_at: z.any(),
  is_active: z.any(),
});
