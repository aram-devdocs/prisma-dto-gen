// Auto-generated by prisma-dto-gen (refactored inline)

export interface ThreadMessageUncheckedUpdateWithoutDiscussion_threadInput {
  message_id: any;
  sender_id: any;
  content: any;
  sent_at: any;
  updated_at?: any;
  is_archived?: any;
}

import { z } from "zod";

export const ThreadMessageUncheckedUpdateWithoutDiscussion_threadInputSchema = z.object({
  message_id: z.string(),
  sender_id: z.string(),
  content: z.string(),
  sent_at: z.date(),
  updated_at: z.date().optional(),
  is_archived: z.boolean().optional(),
});
