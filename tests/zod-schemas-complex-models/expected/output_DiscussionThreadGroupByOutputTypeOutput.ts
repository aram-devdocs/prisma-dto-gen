// Auto-generated by prisma-dto-gen (refactored inline)

export interface DiscussionThreadGroupByOutputTypeOutput {
  thread_id: string;
  primary_participant: string;
  secondary_participant: string;
  created_on: Date;
  closed_on: Date;
  is_flagged: boolean;
  flagged_reason: string;
  _count: any;
  _min: any;
  _max: any;
}

import { z } from "zod";

export const DiscussionThreadGroupByOutputTypeOutputSchema = z.object({
  thread_id: z.string(),
  primary_participant: z.string(),
  secondary_participant: z.string().nullable(),
  created_on: z.date(),
  closed_on: z.date().nullable(),
  is_flagged: z.boolean().nullable(),
  flagged_reason: z.string().nullable(),
  _count: z.any().nullable(),
  _min: z.any().nullable(),
  _max: z.any().nullable(),
});
