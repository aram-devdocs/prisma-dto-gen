// Auto-generated by prisma-dto-gen (refactored inline)

export interface DiscussionThreadCreateManyParticipant_oneInput {
  thread_id?: string;
  secondary_participant?: any;
  created_on?: Date;
  closed_on?: any;
  is_flagged?: any;
  flagged_reason?: any;
}

import { z } from "zod";

export const DiscussionThreadCreateManyParticipant_oneInputSchema = z.object({
  thread_id: z.string().optional(),
  secondary_participant: z.string().nullable().optional(),
  created_on: z.date().optional(),
  closed_on: z.date().nullable().optional(),
  is_flagged: z.boolean().nullable().optional(),
  flagged_reason: z.string().nullable().optional(),
});
