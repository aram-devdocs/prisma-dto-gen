// Auto-generated by prisma-dto-gen (refactored inline)

export interface OrgMembershipCreateWithoutUser_profileInput {
  membership_id?: string;
  joined_on?: Date;
  is_active?: any;
  organization: any;
}

import { z } from "zod";

export const OrgMembershipCreateWithoutUser_profileInputSchema = z.object({
  membership_id: z.string().optional(),
  joined_on: z.date().optional(),
  is_active: z.boolean().nullable().optional(),
  organization: z.any(),
});
