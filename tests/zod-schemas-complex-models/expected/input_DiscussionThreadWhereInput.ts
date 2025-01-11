// Auto-generated by prisma-dto-gen (refactored inline)

export interface DiscussionThreadWhereInput {
  AND: any;
  OR: any;
  NOT: any;
  thread_id: any;
  primary_participant: any;
  secondary_participant?: any | null;
  created_on: any;
  closed_on?: any | null;
  is_flagged?: any | null;
  flagged_reason?: any | null;
  participant_one: any;
  participant_two?: any | null;
  messages: any;
}

import { z } from "zod";

export const DiscussionThreadWhereInputSchema = z.object({
  AND: z.any(),
  OR: z.array(z.any()),
  NOT: z.any(),
  thread_id: z.any(),
  primary_participant: z.any(),
  secondary_participant: z.any().nullable(),
  created_on: z.any(),
  closed_on: z.any().nullable(),
  is_flagged: z.any().nullable(),
  flagged_reason: z.any().nullable(),
  participant_one: z.any(),
  participant_two: z.any().nullable(),
  messages: z.any(),
});
