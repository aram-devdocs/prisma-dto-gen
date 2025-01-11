// Auto-generated by prisma-dto-gen (refactored inline)

export interface ThreadMessageCreateManySenderInput {
  message_id: string;
  thread_id: string;
  content: string;
  sent_at: Date;
  updated_at?: any | null;
  is_archived?: any | null;
}

import { z } from "zod";

export const ThreadMessageCreateManySenderInputSchema = z.object({
  message_id: z.string(),
  thread_id: z.string(),
  content: z.string(),
  sent_at: z.date(),
  updated_at: z.date().nullable(),
  is_archived: z.boolean().nullable(),
});
