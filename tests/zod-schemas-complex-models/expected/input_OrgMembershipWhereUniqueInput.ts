// Auto-generated by prisma-dto-gen (refactored inline)

export interface OrgMembershipWhereUniqueInput {
  membership_id: string;
  AND: any;
  OR: any;
  NOT: any;
  organization_id: any;
  profile_id: any;
  joined_on: any;
  is_active?: any | null;
  organization: any;
  user_profile: any;
}

import { z } from "zod";

export const OrgMembershipWhereUniqueInputSchema = z.object({
  membership_id: z.string(),
  AND: z.any(),
  OR: z.array(z.any()),
  NOT: z.any(),
  organization_id: z.any(),
  profile_id: z.any(),
  joined_on: z.any(),
  is_active: z.any().nullable(),
  organization: z.any(),
  user_profile: z.any(),
});