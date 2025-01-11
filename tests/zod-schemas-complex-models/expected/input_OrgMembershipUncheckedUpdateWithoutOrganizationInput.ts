// Auto-generated by prisma-dto-gen (refactored inline)

export interface OrgMembershipUncheckedUpdateWithoutOrganizationInput {
  membership_id: any;
  profile_id: any;
  joined_on: any;
  is_active?: any | null;
}

import { z } from "zod";

export const OrgMembershipUncheckedUpdateWithoutOrganizationInputSchema = z.object({
  membership_id: z.string(),
  profile_id: z.string(),
  joined_on: z.date(),
  is_active: z.boolean().nullable(),
});