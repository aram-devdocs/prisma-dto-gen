// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserAccountUncheckedCreateInput {
  account_id?: string;
  owner_profile_id: string;
  name: string;
  created_at?: Date;
  modified_at?: any;
  is_active?: boolean;
}

import { z } from "zod";

export const UserAccountUncheckedCreateInputSchema = z.object({
  account_id: z.string().optional(),
  owner_profile_id: z.string(),
  name: z.string(),
  created_at: z.date().optional(),
  modified_at: z.date().nullable().optional(),
  is_active: z.boolean().optional(),
});
