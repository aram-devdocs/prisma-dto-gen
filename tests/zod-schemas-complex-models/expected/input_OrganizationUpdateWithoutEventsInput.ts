// Auto-generated by prisma-dto-gen (refactored inline)

export interface OrganizationUpdateWithoutEventsInput {
  organization_id?: any;
  name?: any;
  description?: any;
  created_on?: any;
  updated_on?: any;
  is_active?: any;
  members?: any;
  records?: any;
}

import { z } from "zod";

export const OrganizationUpdateWithoutEventsInputSchema = z.object({
  organization_id: z.string().optional(),
  name: z.string().optional(),
  description: z.string().nullable().optional(),
  created_on: z.date().optional(),
  updated_on: z.date().nullable().optional(),
  is_active: z.boolean().nullable().optional(),
  members: z.any().optional(),
  records: z.any().optional(),
});
