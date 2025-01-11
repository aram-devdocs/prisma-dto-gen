// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserAccountUncheckedCreateWithoutUser_profileInput {
  account_id: string;
  name: string;
  created_at: Date;
  modified_at?: any | null;
  is_active: boolean;
}

import { z } from "zod";

export const UserAccountUncheckedCreateWithoutUser_profileInputSchema = z.object({
  account_id: z.string(),
  name: z.string(),
  created_at: z.date(),
  modified_at: z.date().nullable(),
  is_active: z.boolean(),
});
