// Auto-generated by prisma-dto-gen (refactored inline)

export interface OrgEventGroupByOutputTypeOutput {
  org_event_id: string;
  organization_id: string;
  event_name: string;
  start_time: Date;
  end_time: Date;
  location: string;
  _count: any;
  _min: any;
  _max: any;
}

import { z } from "zod";

export const OrgEventGroupByOutputTypeOutputSchema = z.object({
  org_event_id: z.string(),
  organization_id: z.string(),
  event_name: z.string(),
  start_time: z.date(),
  end_time: z.date().nullable(),
  location: z.string().nullable(),
  _count: z.any().nullable(),
  _min: z.any().nullable(),
  _max: z.any().nullable(),
});
