// Auto-generated by prisma-dto-gen (refactored inline)

export interface OrgMembershipMinOrderByAggregateInput {
  membership_id?: any;
  organization_id?: any;
  profile_id?: any;
  joined_on?: any;
  is_active?: any;
}

import { z } from "zod";

export const OrgMembershipMinOrderByAggregateInputSchema = z.object({
  membership_id: z.any().optional(),
  organization_id: z.any().optional(),
  profile_id: z.any().optional(),
  joined_on: z.any().optional(),
  is_active: z.any().optional(),
});
