// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserCommentWhereInput {
  AND?:
    | {
        AND?: any /* circular reference to UserCommentWhereInput */;
        OR?: any /* circular reference to UserCommentWhereInput */;
        NOT?: any /* circular reference to UserCommentWhereInput */;
        comment_id?: any;
        document_id?: any;
        commenter_id?: any;
        text?: any;
        created_at?: any;
        edited_at?: any;
        is_deleted?: any;
        user_document?: any;
        user_profile?: any;
      }
    | any /* circular reference to UserCommentWhereInput */;
  OR?: any /* circular reference to UserCommentWhereInput */;
  NOT?: any /* circular reference to UserCommentWhereInput */;
  comment_id?: any;
  document_id?: any;
  commenter_id?: any;
  text?: any;
  created_at?: any;
  edited_at?: any;
  is_deleted?: any;
  user_document?: any;
  user_profile?: any;
}

import { z } from "zod";

export const UserCommentWhereInputSchema = z.object({
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
  user_document: z.any().optional(),
  user_profile: z.any().optional(),
});
