// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserAccountUpdateWithoutUser_profileInput {
  account_id?: any;
  name?: any;
  created_at?: any;
  modified_at?: any;
  is_active?: any;
}

import { z } from "zod";

export const UserAccountUpdateWithoutUser_profileInputSchema = z.object({
  account_id: z.string().optional(),
  name: z.string().optional(),
  created_at: z.date().optional(),
  modified_at: z.date().nullable().optional(),
  is_active: z.boolean().optional(),
});
