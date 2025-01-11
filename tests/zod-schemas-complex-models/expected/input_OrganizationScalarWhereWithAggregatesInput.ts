// Auto-generated by prisma-dto-gen (refactored inline)

export interface OrganizationScalarWhereWithAggregatesInput {
  AND: any;
  OR: any;
  NOT: any;
  organization_id: any;
  name: any;
  description?: any;
  created_on: any;
  updated_on?: any;
  is_active?: any;
}

import { z } from "zod";

export const OrganizationScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.any(),
  OR: z.array(z.any()),
  NOT: z.any(),
  organization_id: z.any(),
  name: z.any(),
  description: z.any().optional(),
  created_on: z.any(),
  updated_on: z.any().optional(),
  is_active: z.any().optional(),
});
