// Auto-generated by prisma-dto-gen (refactored inline)

export interface DiscussionThreadCreateWithoutParticipant_oneInput {
  thread_id: string;
  created_on: Date;
  closed_on?: any;
  is_flagged?: any;
  flagged_reason?: any;
  participant_two: any;
  messages: any;
}

import { z } from "zod";

export const DiscussionThreadCreateWithoutParticipant_oneInputSchema = z.object({
  thread_id: z.string(),
  created_on: z.date(),
  closed_on: z.date().optional(),
  is_flagged: z.boolean().optional(),
  flagged_reason: z.string().optional(),
  participant_two: z.any(),
  messages: z.any(),
});
