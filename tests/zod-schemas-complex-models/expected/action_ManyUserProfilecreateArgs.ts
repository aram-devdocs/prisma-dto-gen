// Auto-generated by prisma-dto-gen (refactored inline)

export interface ManyUserProfileCreateArgs {
  data:
    | {
        profile_id?: string;
        created_timestamp?: Date;
        updated_timestamp?: any;
        deactivated?: any;
        full_name: string;
        email_address?: any;
        phone_number?: any;
        password_hash?: any;
        account_level?: any;
        created_by_id?: any;
      }
    | any /* circular reference to UserProfileCreateManyInput */;
  skipDuplicates?: boolean;
}

import { z } from "zod";

export const ManyUserProfileCreateArgsSchema = z.object({
  data: z.any(),
  skipDuplicates: z.boolean().optional(),
});
