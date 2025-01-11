// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserProfileUpdateManyMutationInput {
  profile_id: any;
  created_timestamp: any;
  updated_timestamp?: any | null;
  deactivated?: any | null;
  full_name: any;
  email_address?: any | null;
  phone_number?: any | null;
  password_hash?: any | null;
  account_level?: any | null;
}

import { z } from "zod";

export const UserProfileUpdateManyMutationInputSchema = z.object({
  profile_id: z.string(),
  created_timestamp: z.date(),
  updated_timestamp: z.date().nullable(),
  deactivated: z.boolean().nullable(),
  full_name: z.string(),
  email_address: z.string().nullable(),
  phone_number: z.string().nullable(),
  password_hash: z.string().nullable(),
  account_level: z.enum(["BASIC", "PREMIUM", "ADMIN"]).nullable(),
});
