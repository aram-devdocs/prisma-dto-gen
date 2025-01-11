// Auto-generated by prisma-dto-gen (refactored inline)

export interface ThreadMessageUncheckedUpdateManyInput {
  message_id: any;
  thread_id: any;
  sender_id: any;
  content: any;
  sent_at: any;
  updated_at?: any | null;
  is_archived?: any | null;
}

import { z } from "zod";

export const ThreadMessageUncheckedUpdateManyInputSchema = z.object({
  message_id: z.string(),
  thread_id: z.string(),
  sender_id: z.string(),
  content: z.string(),
  sent_at: z.date(),
  updated_at: z.date().nullable(),
  is_archived: z.boolean().nullable(),
});