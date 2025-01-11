// Auto-generated by prisma-dto-gen (refactored inline)

export interface OrgEventUpdateWithoutOrganizationInput {
  org_event_id?: any;
  event_name?: any;
  start_time?: any;
  end_time?: any;
  location?: any;
}

import { z } from "zod";

export const OrgEventUpdateWithoutOrganizationInputSchema = z.object({
  org_event_id: z.string().optional(),
  event_name: z.string().optional(),
  start_time: z.date().optional(),
  end_time: z.date().nullable().optional(),
  location: z.string().nullable().optional(),
});
