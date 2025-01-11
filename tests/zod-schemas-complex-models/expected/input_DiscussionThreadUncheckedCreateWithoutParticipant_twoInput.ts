// Auto-generated by prisma-dto-gen (refactored inline)

export interface DiscussionThreadUncheckedCreateWithoutParticipant_twoInput {
  thread_id?: string;
  primary_participant: string;
  created_on?: Date;
  closed_on?: any;
  is_flagged?: any;
  flagged_reason?: any;
  messages?: any;
}

import { z } from "zod";

export const DiscussionThreadUncheckedCreateWithoutParticipant_twoInputSchema = z.object({
  thread_id: z.string().optional(),
  primary_participant: z.string(),
  created_on: z.date().optional(),
  closed_on: z.date().nullable().optional(),
  is_flagged: z.boolean().nullable().optional(),
  flagged_reason: z.string().nullable().optional(),
  messages: z.any().optional(),
});
