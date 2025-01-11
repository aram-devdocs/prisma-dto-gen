// Auto-generated by prisma-dto-gen (refactored inline)

export interface OrgMembershipOrderByWithRelationInput {
  membership_id: any;
  organization_id: any;
  profile_id: any;
  joined_on: any;
  is_active: any;
  organization: any;
  user_profile: any;
}

import { z } from "zod";

export const OrgMembershipOrderByWithRelationInputSchema = z.object({
  membership_id: z.any(),
  organization_id: z.any(),
  profile_id: z.any(),
  joined_on: z.any(),
  is_active: z.any(),
  organization: z.any(),
  user_profile: z.any(),
});