// Auto-generated by prisma-dto-gen (refactored inline)

export interface ThreadMessageUpdateInput {
  message_id?: any;
  content?: any;
  sent_at?: any;
  updated_at?: any;
  is_archived?: any;
  discussion_thread?: any;
  sender?: any;
}

import { z } from "zod";

export const ThreadMessageUpdateInputSchema = z.object({
  message_id: z.string().optional(),
  content: z.string().optional(),
  sent_at: z.date().optional(),
  updated_at: z.date().nullable().optional(),
  is_archived: z.boolean().nullable().optional(),
  discussion_thread: z.any().optional(),
  sender: z.any().optional(),
});
