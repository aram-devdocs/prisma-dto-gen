// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserProfileGroupByOutputTypeOutput {
  profile_id: string;
  created_timestamp: Date;
  updated_timestamp: Date;
  deactivated: boolean;
  full_name: string;
  email_address: string;
  phone_number: string;
  password_hash: string;
  account_level: "BASIC" | "PREMIUM" | "ADMIN";
  created_by_id: string;
  _count: any;
  _min: any;
  _max: any;
}

import { z } from "zod";

export const UserProfileGroupByOutputTypeOutputSchema = z.object({
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
  _count: z.any().nullable(),
  _min: z.any().nullable(),
  _max: z.any().nullable(),
});
