// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserCommentUncheckedCreateWithoutUser_documentInput {
  comment_id?: string;
  commenter_id: string;
  text: string;
  created_at?: Date;
  edited_at?: any;
  is_deleted?: any;
}

import { z } from "zod";

export const UserCommentUncheckedCreateWithoutUser_documentInputSchema = z.object({
  comment_id: z.string().optional(),
  commenter_id: z.string(),
  text: z.string(),
  created_at: z.date().optional(),
  edited_at: z.date().nullable().optional(),
  is_deleted: z.boolean().nullable().optional(),
});
