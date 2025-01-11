// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserProfileWhereUniqueInput {
  profile_id: string;
  email_address: string;
  AND: any;
  OR: any;
  NOT: any;
  created_timestamp: any;
  updated_timestamp?: any;
  deactivated?: any;
  full_name: any;
  phone_number?: any;
  password_hash?: any;
  account_level?: any;
  created_by_id?: any;
  user_documents: any;
  user_notifications: any;
  user_accounts: any;
  user_two_step_codes: any;
  user_comments: any;
  created_by_profile?: any;
  profiles_created: any;
  threads_as_primary_participant: any;
  threads_as_secondary_participant: any;
  sent_messages: any;
  org_memberships: any;
  payments: any;
}

import { z } from "zod";

export const UserProfileWhereUniqueInputSchema = z.object({
  profile_id: z.string(),
  email_address: z.string(),
  AND: z.any(),
  OR: z.array(z.any()),
  NOT: z.any(),
  created_timestamp: z.any(),
  updated_timestamp: z.any().optional(),
  deactivated: z.any().optional(),
  full_name: z.any(),
  phone_number: z.any().optional(),
  password_hash: z.any().optional(),
  account_level: z.any().optional(),
  created_by_id: z.any().optional(),
  user_documents: z.any(),
  user_notifications: z.any(),
  user_accounts: z.any(),
  user_two_step_codes: z.any(),
  user_comments: z.any(),
  created_by_profile: z.any().optional(),
  profiles_created: z.any(),
  threads_as_primary_participant: z.any(),
  threads_as_secondary_participant: z.any(),
  sent_messages: z.any(),
  org_memberships: z.any(),
  payments: z.any(),
});
