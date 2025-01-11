// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserProfileWhereInput {
  AND: any;
  OR: any;
  NOT: any;
  profile_id: any;
  created_timestamp: any;
  updated_timestamp?: any | null;
  deactivated?: any | null;
  full_name: any;
  email_address?: any | null;
  phone_number?: any | null;
  password_hash?: any | null;
  account_level?: any | null;
  created_by_id?: any | null;
  user_documents: any;
  user_notifications: any;
  user_accounts: any;
  user_two_step_codes: any;
  user_comments: any;
  created_by_profile?: any | null;
  profiles_created: any;
  threads_as_primary_participant: any;
  threads_as_secondary_participant: any;
  sent_messages: any;
  org_memberships: any;
  payments: any;
}

import { z } from "zod";

export const UserProfileWhereInputSchema = z.object({
  AND: z.any(),
  OR: z.array(z.any()),
  NOT: z.any(),
  profile_id: z.any(),
  created_timestamp: z.any(),
  updated_timestamp: z.any().nullable(),
  deactivated: z.any().nullable(),
  full_name: z.any(),
  email_address: z.any().nullable(),
  phone_number: z.any().nullable(),
  password_hash: z.any().nullable(),
  account_level: z.any().nullable(),
  created_by_id: z.any().nullable(),
  user_documents: z.any(),
  user_notifications: z.any(),
  user_accounts: z.any(),
  user_two_step_codes: z.any(),
  user_comments: z.any(),
  created_by_profile: z.any().nullable(),
  profiles_created: z.any(),
  threads_as_primary_participant: z.any(),
  threads_as_secondary_participant: z.any(),
  sent_messages: z.any(),
  org_memberships: z.any(),
  payments: z.any(),
});