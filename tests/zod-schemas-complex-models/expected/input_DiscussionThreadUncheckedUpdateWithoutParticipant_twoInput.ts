// Auto-generated by prisma-dto-gen (refactored inline)

export interface DiscussionThreadUncheckedUpdateWithoutParticipant_twoInput {
  thread_id: any;
  primary_participant: any;
  created_on: any;
  closed_on?: any | null;
  is_flagged?: any | null;
  flagged_reason?: any | null;
  messages: any;
}

import { z } from "zod";

export const DiscussionThreadUncheckedUpdateWithoutParticipant_twoInputSchema = z.object({
  thread_id: z.string(),
  primary_participant: z.string(),
  created_on: z.date(),
  closed_on: z.date().nullable(),
  is_flagged: z.boolean().nullable(),
  flagged_reason: z.string().nullable(),
  messages: z.any(),
});