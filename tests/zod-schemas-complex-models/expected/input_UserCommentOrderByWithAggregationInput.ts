// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserCommentOrderByWithAggregationInput {
  comment_id: any;
  document_id: any;
  commenter_id: any;
  text: any;
  created_at: any;
  edited_at: any;
  is_deleted: any;
  _count: any;
  _max: any;
  _min: any;
}

import { z } from "zod";

export const UserCommentOrderByWithAggregationInputSchema = z.object({
  comment_id: z.any(),
  document_id: z.any(),
  commenter_id: z.any(),
  text: z.any(),
  created_at: z.any(),
  edited_at: z.any(),
  is_deleted: z.any(),
  _count: z.any(),
  _max: z.any(),
  _min: z.any(),
});