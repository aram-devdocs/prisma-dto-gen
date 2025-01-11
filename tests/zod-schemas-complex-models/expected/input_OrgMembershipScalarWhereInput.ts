// Auto-generated by prisma-dto-gen (refactored inline)

export interface OrgMembershipScalarWhereInput {
  AND: any;
  OR: any;
  NOT: any;
  membership_id: any;
  organization_id: any;
  profile_id: any;
  joined_on: any;
  is_active?: any | null;
}

import { z } from "zod";

export const OrgMembershipScalarWhereInputSchema = z.object({
  AND: z.any(),
  OR: z.array(z.any()),
  NOT: z.any(),
  membership_id: z.any(),
  organization_id: z.any(),
  profile_id: z.any(),
  joined_on: z.any(),
  is_active: z.any().nullable(),
});