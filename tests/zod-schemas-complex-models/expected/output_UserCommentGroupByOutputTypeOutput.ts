// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserCommentGroupByOutputTypeOutput {
  comment_id: string;
  document_id: string;
  commenter_id: string;
  text: string;
  created_at: Date;
  edited_at?: Date | null;
  is_deleted?: boolean | null;
  _count?: any | null;
  _min?: any | null;
  _max?: any | null;
}

import { z } from "zod";

export const UserCommentGroupByOutputTypeOutputSchema = z.object({
  comment_id: z.string(),
  document_id: z.string(),
  commenter_id: z.string(),
  text: z.string(),
  created_at: z.date(),
  edited_at: z.date().nullable(),
  is_deleted: z.boolean().nullable(),
  _count: z.any().nullable(),
  _min: z.any().nullable(),
  _max: z.any().nullable(),
});