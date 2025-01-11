// Auto-generated by prisma-dto-gen (refactored inline)

export interface DiscussionThreadCreateWithoutParticipant_oneInput {
  thread_id: string;
  created_on: Date;
  closed_on?: any | null;
  is_flagged?: any | null;
  flagged_reason?: any | null;
  participant_two: any;
  messages: any;
}

import { z } from "zod";

export const DiscussionThreadCreateWithoutParticipant_oneInputSchema = z.object({
  thread_id: z.string(),
  created_on: z.date(),
  closed_on: z.date().nullable(),
  is_flagged: z.boolean().nullable(),
  flagged_reason: z.string().nullable(),
  participant_two: z.any(),
  messages: z.any(),
});