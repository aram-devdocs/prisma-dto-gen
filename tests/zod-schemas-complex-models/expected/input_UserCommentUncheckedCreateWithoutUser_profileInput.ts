// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserCommentUncheckedCreateWithoutUser_profileInput {
  comment_id: string;
  document_id: string;
  text: string;
  created_at: Date;
  edited_at?: any | null;
  is_deleted?: any | null;
}

import { z } from "zod";

export const UserCommentUncheckedCreateWithoutUser_profileInputSchema = z.object({
  comment_id: z.string(),
  document_id: z.string(),
  text: z.string(),
  created_at: z.date(),
  edited_at: z.date().nullable(),
  is_deleted: z.boolean().nullable(),
});