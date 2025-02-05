// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserAccountGroupByOutputTypeOutput {
  account_id: string;
  owner_profile_id: string;
  name: string;
  created_at: Date;
  modified_at: Date;
  is_active: boolean;
  _count: any;
  _min: any;
  _max: any;
}

import { z } from "zod";

export const UserAccountGroupByOutputTypeOutputSchema = z.object({
  account_id: z.string(),
  owner_profile_id: z.string(),
  name: z.string(),
  created_at: z.date(),
  modified_at: z.date().nullable(),
  is_active: z.boolean(),
  _count: z.any().nullable(),
  _min: z.any().nullable(),
  _max: z.any().nullable(),
});
