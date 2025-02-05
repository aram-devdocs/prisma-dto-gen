// Auto-generated by prisma-dto-gen (refactored inline)

export interface ThreadMessageCreateWithoutDiscussion_threadInput {
  message_id?: string;
  content: string;
  sent_at?: Date;
  updated_at?: any;
  is_archived?: any;
  sender: any;
}

import { z } from "zod";

export const ThreadMessageCreateWithoutDiscussion_threadInputSchema = z.object({
  message_id: z.string().optional(),
  content: z.string(),
  sent_at: z.date().optional(),
  updated_at: z.date().nullable().optional(),
  is_archived: z.boolean().nullable().optional(),
  sender: z.any(),
});
