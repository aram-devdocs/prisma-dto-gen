// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserAccountUpdateInput {
  account_id?: any;
  name?: any;
  created_at?: any;
  modified_at?: any;
  is_active?: any;
  user_profile?: any;
}

import { z } from "zod";

export const UserAccountUpdateInputSchema = z.object({
  account_id: z.string().optional(),
  name: z.string().optional(),
  created_at: z.date().optional(),
  modified_at: z.date().nullable().optional(),
  is_active: z.boolean().optional(),
  user_profile: z.any().optional(),
});
