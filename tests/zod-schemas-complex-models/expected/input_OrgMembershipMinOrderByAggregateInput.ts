// Auto-generated by prisma-dto-gen (refactored inline)

export interface OrgMembershipMinOrderByAggregateInput {
  membership_id: any;
  organization_id: any;
  profile_id: any;
  joined_on: any;
  is_active: any;
}

import { z } from "zod";

export const OrgMembershipMinOrderByAggregateInputSchema = z.object({
  membership_id: z.any(),
  organization_id: z.any(),
  profile_id: z.any(),
  joined_on: z.any(),
  is_active: z.any(),
});