// Auto-generated by prisma-dto-gen (refactored inline)

export interface OrgEventUncheckedUpdateManyWithoutOrganizationInput {
  org_event_id: any;
  event_name: any;
  start_time: any;
  end_time?: any | null;
  location?: any | null;
}

import { z } from "zod";

export const OrgEventUncheckedUpdateManyWithoutOrganizationInputSchema = z.object({
  org_event_id: z.string(),
  event_name: z.string(),
  start_time: z.date(),
  end_time: z.date().nullable(),
  location: z.string().nullable(),
});
