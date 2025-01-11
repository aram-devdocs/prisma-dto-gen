// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserCommentCreateInput {
  comment_id: string;
  text: string;
  created_at: Date;
  edited_at?: any | null;
  is_deleted?: any | null;
  user_document: any;
  user_profile: any;
}

import { z } from "zod";

export const UserCommentCreateInputSchema = z.object({
  comment_id: z.string(),
  text: z.string(),
  created_at: z.date(),
  edited_at: z.date().nullable(),
  is_deleted: z.boolean().nullable(),
  user_document: z.any(),
  user_profile: z.any(),
});
