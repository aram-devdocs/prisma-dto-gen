// Auto-generated by prisma-dto-gen (refactored inline)

export interface ThreadMessageUpdateWithoutSenderInput {
  message_id: any;
  content: any;
  sent_at: any;
  updated_at?: any;
  is_archived?: any;
  discussion_thread: any;
}

import { z } from "zod";

export const ThreadMessageUpdateWithoutSenderInputSchema = z.object({
  message_id: z.string(),
  content: z.string(),
  sent_at: z.date(),
  updated_at: z.date().optional(),
  is_archived: z.boolean().optional(),
  discussion_thread: z.any(),
});
