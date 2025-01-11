// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserCommentMaxAggregateOutputTypeOutput {
  comment_id?: string | null;
  document_id?: string | null;
  commenter_id?: string | null;
  text?: string | null;
  created_at?: Date | null;
  edited_at?: Date | null;
  is_deleted?: boolean | null;
}

import { z } from "zod";

export const UserCommentMaxAggregateOutputTypeOutputSchema = z.object({
  comment_id: z.string().nullable(),
  document_id: z.string().nullable(),
  commenter_id: z.string().nullable(),
  text: z.string().nullable(),
  created_at: z.date().nullable(),
  edited_at: z.date().nullable(),
  is_deleted: z.boolean().nullable(),
});