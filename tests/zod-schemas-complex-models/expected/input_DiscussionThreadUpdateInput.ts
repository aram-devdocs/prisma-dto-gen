// Auto-generated by prisma-dto-gen (refactored inline)

export interface DiscussionThreadUpdateInput {
  thread_id: any;
  created_on: any;
  closed_on?: any | null;
  is_flagged?: any | null;
  flagged_reason?: any | null;
  participant_one: any;
  participant_two: any;
  messages: any;
}

import { z } from "zod";

export const DiscussionThreadUpdateInputSchema = z.object({
  thread_id: z.string(),
  created_on: z.date(),
  closed_on: z.date().nullable(),
  is_flagged: z.boolean().nullable(),
  flagged_reason: z.string().nullable(),
  participant_one: z.any(),
  participant_two: z.any(),
  messages: z.any(),
});