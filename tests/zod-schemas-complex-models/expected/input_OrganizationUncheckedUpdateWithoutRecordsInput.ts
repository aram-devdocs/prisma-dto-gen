// Auto-generated by prisma-dto-gen (refactored inline)

export interface OrganizationUncheckedUpdateWithoutRecordsInput {
  organization_id: any;
  name: any;
  description?: any | null;
  created_on: any;
  updated_on?: any | null;
  is_active?: any | null;
  events: any;
  members: any;
}

import { z } from "zod";

export const OrganizationUncheckedUpdateWithoutRecordsInputSchema = z.object({
  organization_id: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  created_on: z.date(),
  updated_on: z.date().nullable(),
  is_active: z.boolean().nullable(),
  events: z.any(),
  members: z.any(),
});