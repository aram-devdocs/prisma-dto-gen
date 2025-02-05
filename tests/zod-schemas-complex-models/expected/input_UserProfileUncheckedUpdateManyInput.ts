// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserProfileUncheckedUpdateManyInput {
  profile_id?: any;
  created_timestamp?: any;
  updated_timestamp?: any;
  deactivated?: any;
  full_name?: any;
  email_address?: any;
  phone_number?: any;
  password_hash?: any;
  account_level?: any;
  created_by_id?: any;
}

import { z } from "zod";

export const UserProfileUncheckedUpdateManyInputSchema = z.object({
  profile_id: z.string().optional(),
  created_timestamp: z.date().optional(),
  updated_timestamp: z.date().nullable().optional(),
  deactivated: z.boolean().nullable().optional(),
  full_name: z.string().optional(),
  email_address: z.string().nullable().optional(),
  phone_number: z.string().nullable().optional(),
  password_hash: z.string().nullable().optional(),
  account_level: z.enum(["BASIC", "PREMIUM", "ADMIN"]).nullable().optional(),
  created_by_id: z.string().nullable().optional(),
});
