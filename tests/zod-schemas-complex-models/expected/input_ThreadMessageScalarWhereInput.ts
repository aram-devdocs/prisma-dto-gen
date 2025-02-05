// Auto-generated by prisma-dto-gen (refactored inline)

export interface ThreadMessageScalarWhereInput {
  AND?:
    | {
        AND?: any /* circular reference to ThreadMessageScalarWhereInput */;
        OR?: any /* circular reference to ThreadMessageScalarWhereInput */;
        NOT?: any /* circular reference to ThreadMessageScalarWhereInput */;
        message_id?: any;
        thread_id?: any;
        sender_id?: any;
        content?: any;
        sent_at?: any;
        updated_at?: any;
        is_archived?: any;
      }
    | any /* circular reference to ThreadMessageScalarWhereInput */;
  OR?: any /* circular reference to ThreadMessageScalarWhereInput */;
  NOT?: any /* circular reference to ThreadMessageScalarWhereInput */;
  message_id?: any;
  thread_id?: any;
  sender_id?: any;
  content?: any;
  sent_at?: any;
  updated_at?: any;
  is_archived?: any;
}

import { z } from "zod";

export const ThreadMessageScalarWhereInputSchema = z.object({
  AND: z.any().optional(),
  OR: z.array(z.any()).optional(),
  NOT: z.any().optional(),
  message_id: z.any().optional(),
  thread_id: z.any().optional(),
  sender_id: z.any().optional(),
  content: z.any().optional(),
  sent_at: z.any().optional(),
  updated_at: z.any().nullable().optional(),
  is_archived: z.any().nullable().optional(),
});
