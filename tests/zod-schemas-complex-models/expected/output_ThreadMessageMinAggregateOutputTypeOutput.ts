// Auto-generated by prisma-dto-gen (refactored inline)

export interface ThreadMessageMinAggregateOutputTypeOutput {
  message_id?: string | null;
  thread_id?: string | null;
  sender_id?: string | null;
  content?: string | null;
  sent_at?: Date | null;
  updated_at?: Date | null;
  is_archived?: boolean | null;
}

import { z } from "zod";

export const ThreadMessageMinAggregateOutputTypeOutputSchema = z.object({
  message_id: z.string().nullable(),
  thread_id: z.string().nullable(),
  sender_id: z.string().nullable(),
  content: z.string().nullable(),
  sent_at: z.date().nullable(),
  updated_at: z.date().nullable(),
  is_archived: z.boolean().nullable(),
});
