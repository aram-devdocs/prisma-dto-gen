// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserProfileUncheckedUpdateManyWithoutCreated_by_profileInput {
  profile_id: any;
  created_timestamp: any;
  updated_timestamp?: any;
  deactivated?: any;
  full_name: any;
  email_address?: any;
  phone_number?: any;
  password_hash?: any;
  account_level?: any;
}

import { z } from "zod";

export const UserProfileUncheckedUpdateManyWithoutCreated_by_profileInputSchema = z.object({
  profile_id: z.string(),
  created_timestamp: z.date(),
  updated_timestamp: z.date().optional(),
  deactivated: z.boolean().optional(),
  full_name: z.string(),
  email_address: z.string().optional(),
  phone_number: z.string().optional(),
  password_hash: z.string().optional(),
  account_level: z.enum(["BASIC", "PREMIUM", "ADMIN"]).optional(),
});
