// Auto-generated by prisma-dto-gen (refactored inline)

export interface DiscussionThreadCreateManyParticipant_twoInput {
  thread_id: string;
  primary_participant: string;
  created_on: Date;
  closed_on?: any;
  is_flagged?: any;
  flagged_reason?: any;
}

import { z } from "zod";

export const DiscussionThreadCreateManyParticipant_twoInputSchema = z.object({
  thread_id: z.string(),
  primary_participant: z.string(),
  created_on: z.date(),
  closed_on: z.date().optional(),
  is_flagged: z.boolean().optional(),
  flagged_reason: z.string().optional(),
});
