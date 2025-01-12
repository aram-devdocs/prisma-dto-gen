// Auto-generated by prisma-dto-gen (refactored inline)

export interface ThreadMessageMaxAggregateOutputTypeOutput {
  message_id: string;
  thread_id: string;
  sender_id: string;
  content: string;
  sent_at: Date;
  updated_at: Date;
  is_archived: boolean;
}

import { z } from "zod";

export const ThreadMessageMaxAggregateOutputTypeOutputSchema = z.object({
  message_id: z.string().nullable(),
  thread_id: z.string().nullable(),
  sender_id: z.string().nullable(),
  content: z.string().nullable(),
  sent_at: z.date().nullable(),
  updated_at: z.date().nullable(),
  is_archived: z.boolean().nullable(),
});
