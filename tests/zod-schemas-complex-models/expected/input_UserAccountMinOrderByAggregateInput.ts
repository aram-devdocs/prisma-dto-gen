// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserAccountMinOrderByAggregateInput {
  account_id?: any;
  owner_profile_id?: any;
  name?: any;
  created_at?: any;
  modified_at?: any;
  is_active?: any;
}

import { z } from "zod";

export const UserAccountMinOrderByAggregateInputSchema = z.object({
  account_id: z.any().optional(),
  owner_profile_id: z.any().optional(),
  name: z.any().optional(),
  created_at: z.any().optional(),
  modified_at: z.any().optional(),
  is_active: z.any().optional(),
});
