// Auto-generated by prisma-dto-gen (refactored inline)

export interface OrgMembershipUpdateInput {
  membership_id: any;
  joined_on: any;
  is_active?: any | null;
  organization: any;
  user_profile: any;
}

import { z } from "zod";

export const OrgMembershipUpdateInputSchema = z.object({
  membership_id: z.string(),
  joined_on: z.date(),
  is_active: z.boolean().nullable(),
  organization: z.any(),
  user_profile: z.any(),
});
