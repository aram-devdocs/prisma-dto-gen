// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserProfileMaxOrderByAggregateInput {
  profile_id: any;
  created_timestamp: any;
  updated_timestamp: any;
  deactivated: any;
  full_name: any;
  email_address: any;
  phone_number: any;
  password_hash: any;
  account_level: any;
  created_by_id: any;
}

import { z } from "zod";

export const UserProfileMaxOrderByAggregateInputSchema = z.object({
  profile_id: z.any(),
  created_timestamp: z.any(),
  updated_timestamp: z.any(),
  deactivated: z.any(),
  full_name: z.any(),
  email_address: z.any(),
  phone_number: z.any(),
  password_hash: z.any(),
  account_level: z.any(),
  created_by_id: z.any(),
});
