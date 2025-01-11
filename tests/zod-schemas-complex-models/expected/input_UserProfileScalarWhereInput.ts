// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserProfileScalarWhereInput {
  AND: any;
  OR: any;
  NOT: any;
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
}

import { z } from "zod";

export const UserProfileScalarWhereInputSchema = z.object({
  AND: z.any(),
  OR: z.array(z.any()),
  NOT: z.any(),
  profile_id: z.any(),
  created_timestamp: z.any(),
  updated_timestamp: z.any().optional(),
  deactivated: z.any().optional(),
  full_name: z.any(),
  email_address: z.any().optional(),
  phone_number: z.any().optional(),
  password_hash: z.any().optional(),
  account_level: z.any().optional(),
  created_by_id: z.any().optional(),
});
