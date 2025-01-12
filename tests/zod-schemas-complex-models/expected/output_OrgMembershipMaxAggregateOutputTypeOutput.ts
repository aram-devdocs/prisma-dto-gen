// Auto-generated by prisma-dto-gen (refactored inline)

export interface OrgMembershipMaxAggregateOutputTypeOutput {
  membership_id: string;
  organization_id: string;
  profile_id: string;
  joined_on: Date;
  is_active: boolean;
}

import { z } from "zod";

export const OrgMembershipMaxAggregateOutputTypeOutputSchema = z.object({
  membership_id: z.string().nullable(),
  organization_id: z.string().nullable(),
  profile_id: z.string().nullable(),
  joined_on: z.date().nullable(),
  is_active: z.boolean().nullable(),
});
