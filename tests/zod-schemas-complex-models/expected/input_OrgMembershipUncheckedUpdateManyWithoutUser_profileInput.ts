// Auto-generated by prisma-dto-gen (refactored inline)

export interface OrgMembershipUncheckedUpdateManyWithoutUser_profileInput {
  membership_id?: any;
  organization_id?: any;
  joined_on?: any;
  is_active?: any;
}

import { z } from "zod";

export const OrgMembershipUncheckedUpdateManyWithoutUser_profileInputSchema = z.object({
  membership_id: z.string().optional(),
  organization_id: z.string().optional(),
  joined_on: z.date().optional(),
  is_active: z.boolean().nullable().optional(),
});
