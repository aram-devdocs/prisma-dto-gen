// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserProfileUncheckedUpdateWithoutSent_messagesInput {
  profile_id: any;
  created_timestamp: any;
  updated_timestamp?: any;
  deactivated?: any;
  full_name: any;
  email_address?: any;
  phone_number?: any;
  password_hash?: any;
  account_level?: any;
  created_by_id?: any;
  user_documents: any;
  user_notifications: any;
  user_accounts: any;
  user_two_step_codes: any;
  user_comments: any;
  profiles_created: any;
  threads_as_primary_participant: any;
  threads_as_secondary_participant: any;
  org_memberships: any;
  payments: any;
}

import { z } from "zod";

export const UserProfileUncheckedUpdateWithoutSent_messagesInputSchema = z.object({
  profile_id: z.string(),
  created_timestamp: z.date(),
  updated_timestamp: z.date().optional(),
  deactivated: z.boolean().optional(),
  full_name: z.string(),
  email_address: z.string().optional(),
  phone_number: z.string().optional(),
  password_hash: z.string().optional(),
  account_level: z.enum(["BASIC", "PREMIUM", "ADMIN"]).optional(),
  created_by_id: z.string().optional(),
  user_documents: z.any(),
  user_notifications: z.any(),
  user_accounts: z.any(),
  user_two_step_codes: z.any(),
  user_comments: z.any(),
  profiles_created: z.any(),
  threads_as_primary_participant: z.any(),
  threads_as_secondary_participant: z.any(),
  org_memberships: z.any(),
  payments: z.any(),
});
