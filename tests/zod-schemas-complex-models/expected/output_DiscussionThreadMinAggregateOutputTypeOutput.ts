// Auto-generated by prisma-dto-gen (refactored inline)

export interface DiscussionThreadMinAggregateOutputTypeOutput {
  thread_id?: string | null;
  primary_participant?: string | null;
  secondary_participant?: string | null;
  created_on?: Date | null;
  closed_on?: Date | null;
  is_flagged?: boolean | null;
  flagged_reason?: string | null;
}

import { z } from "zod";

export const DiscussionThreadMinAggregateOutputTypeOutputSchema = z.object({
  thread_id: z.string().nullable(),
  primary_participant: z.string().nullable(),
  secondary_participant: z.string().nullable(),
  created_on: z.date().nullable(),
  closed_on: z.date().nullable(),
  is_flagged: z.boolean().nullable(),
  flagged_reason: z.string().nullable(),
});
