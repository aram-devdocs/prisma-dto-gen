// Auto-generated by prisma-dto-gen (refactored inline)

export interface DiscussionThreadCreateWithoutParticipant_twoInput {
  thread_id?: string;
  created_on?: Date;
  closed_on?: any;
  is_flagged?: any;
  flagged_reason?: any;
  participant_one: any;
  messages?: any;
}

import { z } from "zod";

export const DiscussionThreadCreateWithoutParticipant_twoInputSchema = z.object({
  thread_id: z.string().optional(),
  created_on: z.date().optional(),
  closed_on: z.date().nullable().optional(),
  is_flagged: z.boolean().nullable().optional(),
  flagged_reason: z.string().nullable().optional(),
  participant_one: z.any(),
  messages: z.any().optional(),
});
