// Auto-generated by prisma-dto-gen (refactored inline)

export interface OrganizationWhereUniqueInput {
  organization_id?: string;
  AND?: any;
  OR?: any;
  NOT?: any;
  name?: any;
  description?: any;
  created_on?: any;
  updated_on?: any;
  is_active?: any;
  events?: any;
  members?: any;
  records?: any;
}

import { z } from "zod";

export const OrganizationWhereUniqueInputSchema = z.object({
  organization_id: z.string().optional(),
  AND: z.any().optional(),
  OR: z.array(z.any()).optional(),
  NOT: z.any().optional(),
  name: z.any().optional(),
  description: z.any().nullable().optional(),
  created_on: z.any().optional(),
  updated_on: z.any().nullable().optional(),
  is_active: z.any().nullable().optional(),
  events: z.any().optional(),
  members: z.any().optional(),
  records: z.any().optional(),
});
