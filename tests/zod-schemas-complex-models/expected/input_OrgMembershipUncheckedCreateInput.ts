// Auto-generated by prisma-dto-gen (refactored inline)

export interface OrgMembershipUncheckedCreateInput {
  membership_id?: string;
  organization_id: string;
  profile_id: string;
  joined_on?: Date;
  is_active?: any;
}

import { z } from "zod";

export const OrgMembershipUncheckedCreateInputSchema = z.object({
  membership_id: z.string().optional(),
  organization_id: z.string(),
  profile_id: z.string(),
  joined_on: z.date().optional(),
  is_active: z.boolean().nullable().optional(),
});
