// Auto-generated by prisma-dto-gen (refactored inline)

export interface DiscussionThreadCountAggregateOutputTypeOutput {
  thread_id: number;
  primary_participant: number;
  secondary_participant: number;
  created_on: number;
  closed_on: number;
  is_flagged: number;
  flagged_reason: number;
  _all: number;
}

import { z } from "zod";

export const DiscussionThreadCountAggregateOutputTypeOutputSchema = z.object({
  thread_id: z.number(),
  primary_participant: z.number(),
  secondary_participant: z.number(),
  created_on: z.number(),
  closed_on: z.number(),
  is_flagged: z.number(),
  flagged_reason: z.number(),
  _all: z.number(),
});
