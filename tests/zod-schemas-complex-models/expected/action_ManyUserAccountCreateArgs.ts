// Auto-generated by prisma-dto-gen (refactored inline)

export interface ManyUserAccountCreateArgs {
  data:
    | {
        account_id?: string;
        owner_profile_id: string;
        name: string;
        created_at?: Date;
        modified_at?: any;
        is_active?: boolean;
      }
    | any /* circular reference to UserAccountCreateManyInput */;
  skipDuplicates?: boolean;
}

import { z } from "zod";

export const ManyUserAccountCreateArgsSchema = z.object({
  data: z.any(),
  skipDuplicates: z.boolean().optional(),
});