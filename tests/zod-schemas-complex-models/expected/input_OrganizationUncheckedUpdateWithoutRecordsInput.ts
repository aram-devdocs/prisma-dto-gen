// Auto-generated by prisma-dto-gen (refactored inline)

export interface OrganizationUncheckedUpdateWithoutRecordsInput {
  organization_id?: any;
  name?: any;
  description?: any;
  created_on?: any;
  updated_on?: any;
  is_active?: any;
  events?: any;
  members?: any;
}

import { z } from "zod";

export const OrganizationUncheckedUpdateWithoutRecordsInputSchema = z.object({
  organization_id: z.string().optional(),
  name: z.string().optional(),
  description: z.string().nullable().optional(),
  created_on: z.date().optional(),
  updated_on: z.date().nullable().optional(),
  is_active: z.boolean().nullable().optional(),
  events: z.any().optional(),
  members: z.any().optional(),
});
