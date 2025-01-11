// Auto-generated by prisma-dto-gen (refactored inline)

export interface OrgMembershipWhereInput {
  AND?: any;
  OR?: any;
  NOT?: any;
  membership_id?: any;
  organization_id?: any;
  profile_id?: any;
  joined_on?: any;
  is_active?: any;
  organization?: any;
  user_profile?: any;
}

import { z } from "zod";

export const OrgMembershipWhereInputSchema = z.object({
  AND: z.any().optional(),
  OR: z.array(z.any()).optional(),
  NOT: z.any().optional(),
  membership_id: z.any().optional(),
  organization_id: z.any().optional(),
  profile_id: z.any().optional(),
  joined_on: z.any().optional(),
  is_active: z.any().nullable().optional(),
  organization: z.any().optional(),
  user_profile: z.any().optional(),
});
