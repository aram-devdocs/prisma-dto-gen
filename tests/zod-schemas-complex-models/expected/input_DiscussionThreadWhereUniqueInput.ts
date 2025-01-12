// Auto-generated by prisma-dto-gen (refactored inline)

export interface DiscussionThreadWhereUniqueInput {
  thread_id?: string;
  AND?: any;
  OR?: any;
  NOT?: any;
  primary_participant?: any;
  secondary_participant?: any;
  created_on?: any;
  closed_on?: any;
  is_flagged?: any;
  flagged_reason?: any;
  participant_one?: any;
  participant_two?: any;
  messages?: any;
}

import { z } from "zod";

export const DiscussionThreadWhereUniqueInputSchema = z.object({
  thread_id: z.string().optional(),
  AND: z.any().optional(),
  OR: z.array(z.any()).optional(),
  NOT: z.any().optional(),
  primary_participant: z.any().optional(),
  secondary_participant: z.any().nullable().optional(),
  created_on: z.any().optional(),
  closed_on: z.any().nullable().optional(),
  is_flagged: z.any().nullable().optional(),
  flagged_reason: z.any().nullable().optional(),
  participant_one: z.any().optional(),
  participant_two: z.any().nullable().optional(),
  messages: z.any().optional(),
});
