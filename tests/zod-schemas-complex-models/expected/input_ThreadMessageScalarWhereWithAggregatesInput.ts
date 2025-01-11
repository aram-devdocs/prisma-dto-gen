// Auto-generated by prisma-dto-gen (refactored inline)

export interface ThreadMessageScalarWhereWithAggregatesInput {
  AND: any;
  OR: any;
  NOT: any;
  message_id: any;
  thread_id: any;
  sender_id: any;
  content: any;
  sent_at: any;
  updated_at?: any;
  is_archived?: any;
}

import { z } from "zod";

export const ThreadMessageScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.any(),
  OR: z.array(z.any()),
  NOT: z.any(),
  message_id: z.any(),
  thread_id: z.any(),
  sender_id: z.any(),
  content: z.any(),
  sent_at: z.any(),
  updated_at: z.any().optional(),
  is_archived: z.any().optional(),
});
