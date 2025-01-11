// Auto-generated by prisma-dto-gen (refactored inline)

export interface DiscussionThreadMinOrderByAggregateInput {
  thread_id: any;
  primary_participant: any;
  secondary_participant: any;
  created_on: any;
  closed_on: any;
  is_flagged: any;
  flagged_reason: any;
}

import { z } from "zod";

export const DiscussionThreadMinOrderByAggregateInputSchema = z.object({
  thread_id: z.any(),
  primary_participant: z.any(),
  secondary_participant: z.any(),
  created_on: z.any(),
  closed_on: z.any(),
  is_flagged: z.any(),
  flagged_reason: z.any(),
});
