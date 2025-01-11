// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserProfileUncheckedCreateWithoutUser_accountsInput {
  profile_id: string;
  created_timestamp: Date;
  updated_timestamp?: any | null;
  deactivated?: any | null;
  full_name: string;
  email_address?: any | null;
  phone_number?: any | null;
  password_hash?: any | null;
  account_level?: any | null;
  created_by_id?: any | null;
  user_documents: any;
  user_notifications: any;
  user_two_step_codes: any;
  user_comments: any;
  profiles_created: any;
  threads_as_primary_participant: any;
  threads_as_secondary_participant: any;
  sent_messages: any;
  org_memberships: any;
  payments: any;
}

import { z } from "zod";

export const UserProfileUncheckedCreateWithoutUser_accountsInputSchema = z.object({
  profile_id: z.string(),
  created_timestamp: z.date(),
  updated_timestamp: z.date().nullable(),
  deactivated: z.boolean().nullable(),
  full_name: z.string(),
  email_address: z.string().nullable(),
  phone_number: z.string().nullable(),
  password_hash: z.string().nullable(),
  account_level: z.enum(["BASIC", "PREMIUM", "ADMIN"]).nullable(),
  created_by_id: z.string().nullable(),
  user_documents: z.any(),
  user_notifications: z.any(),
  user_two_step_codes: z.any(),
  user_comments: z.any(),
  profiles_created: z.any(),
  threads_as_primary_participant: z.any(),
  threads_as_secondary_participant: z.any(),
  sent_messages: z.any(),
  org_memberships: z.any(),
  payments: z.any(),
});
