// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserCommentScalarWhereInput {
  AND?:
    | {
        AND?: any /* circular reference to UserCommentScalarWhereInput */;
        OR?: any /* circular reference to UserCommentScalarWhereInput */;
        NOT?: any /* circular reference to UserCommentScalarWhereInput */;
        comment_id?: any;
        document_id?: any;
        commenter_id?: any;
        text?: any;
        created_at?: any;
        edited_at?: any;
        is_deleted?: any;
      }
    | any /* circular reference to UserCommentScalarWhereInput */;
  OR?: any /* circular reference to UserCommentScalarWhereInput */;
  NOT?: any /* circular reference to UserCommentScalarWhereInput */;
  comment_id?: any;
  document_id?: any;
  commenter_id?: any;
  text?: any;
  created_at?: any;
  edited_at?: any;
  is_deleted?: any;
}

import { z } from "zod";

export const UserCommentScalarWhereInputSchema = z.object({
  AND: z.any().optional(),
  OR: z.array(z.any()).optional(),
  NOT: z.any().optional(),
  comment_id: z.any().optional(),
  document_id: z.any().optional(),
  commenter_id: z.any().optional(),
  text: z.any().optional(),
  created_at: z.any().optional(),
  edited_at: z.any().nullable().optional(),
  is_deleted: z.any().nullable().optional(),
});
