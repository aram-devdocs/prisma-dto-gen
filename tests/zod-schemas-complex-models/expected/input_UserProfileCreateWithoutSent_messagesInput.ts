// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserProfileCreateWithoutSent_messagesInput {
  profile_id?: string;
  created_timestamp?: Date;
  updated_timestamp?: any;
  deactivated?: any;
  full_name: string;
  email_address?: any;
  phone_number?: any;
  password_hash?: any;
  account_level?: any;
  user_documents?: any;
  user_notifications?: any;
  user_accounts?: any;
  user_two_step_codes?: any;
  user_comments?: any;
  created_by_profile?: any;
  profiles_created?: any;
  threads_as_primary_participant?: any;
  threads_as_secondary_participant?: any;
  org_memberships?: any;
  payments?: any;
}

import { z } from "zod";

export const UserProfileCreateWithoutSent_messagesInputSchema = z.object({
  profile_id: z.string().optional(),
  created_timestamp: z.date().optional(),
  updated_timestamp: z.date().nullable().optional(),
  deactivated: z.boolean().nullable().optional(),
  full_name: z.string(),
  email_address: z.string().nullable().optional(),
  phone_number: z.string().nullable().optional(),
  password_hash: z.string().nullable().optional(),
  account_level: z.enum(["BASIC", "PREMIUM", "ADMIN"]).nullable().optional(),
  user_documents: z.any().optional(),
  user_notifications: z.any().optional(),
  user_accounts: z.any().optional(),
  user_two_step_codes: z.any().optional(),
  user_comments: z.any().optional(),
  created_by_profile: z.any().optional(),
  profiles_created: z.any().optional(),
  threads_as_primary_participant: z.any().optional(),
  threads_as_secondary_participant: z.any().optional(),
  org_memberships: z.any().optional(),
  payments: z.any().optional(),
});
