// Auto-generated by prisma-dto-gen (refactored inline)

export interface OrgMembershipUpdateWithoutOrganizationInput {
  membership_id?: any;
  joined_on?: any;
  is_active?: any;
  user_profile?: any;
}

import { z } from "zod";

export const OrgMembershipUpdateWithoutOrganizationInputSchema = z.object({
  membership_id: z.string().optional(),
  joined_on: z.date().optional(),
  is_active: z.boolean().nullable().optional(),
  user_profile: z.any().optional(),
});
