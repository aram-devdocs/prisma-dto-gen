// Auto-generated by prisma-dto-gen (refactored inline)

export interface OrganizationOrderByWithRelationInput {
  organization_id: any;
  name: any;
  description: any;
  created_on: any;
  updated_on: any;
  is_active: any;
  events: any;
  members: any;
  records: any;
}

import { z } from "zod";

export const OrganizationOrderByWithRelationInputSchema = z.object({
  organization_id: z.any(),
  name: z.any(),
  description: z.any(),
  created_on: z.any(),
  updated_on: z.any(),
  is_active: z.any(),
  events: z.any(),
  members: z.any(),
  records: z.any(),
});
