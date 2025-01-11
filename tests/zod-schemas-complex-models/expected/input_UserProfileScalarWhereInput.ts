// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserProfileScalarWhereInput {
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
}

import { z } from "zod";

export const UserProfileScalarWhereInputSchema = z.object({
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
});