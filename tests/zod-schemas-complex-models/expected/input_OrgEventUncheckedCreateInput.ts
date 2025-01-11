// Auto-generated by prisma-dto-gen (refactored inline)

export interface OrgEventUncheckedCreateInput {
  org_event_id: string;
  organization_id: string;
  event_name: string;
  start_time: Date;
  end_time?: any | null;
  location?: any | null;
}

import { z } from "zod";

export const OrgEventUncheckedCreateInputSchema = z.object({
  org_event_id: z.string(),
  organization_id: z.string(),
  event_name: z.string(),
  start_time: z.date(),
  end_time: z.date().nullable(),
  location: z.string().nullable(),
});
