// Auto-generated by prisma-dto-gen (refactored inline)

export interface ManyUserCommentDeleteArgs {
  where?: {
    AND?: any /* circular reference to UserCommentWhereInput */;
    OR?: any /* circular reference to UserCommentWhereInput */;
    NOT?: any /* circular reference to UserCommentWhereInput */;
    comment_id?:
      | {
          equals?: any;
          in?: any;
          notIn?: any;
          lt?: any;
          lte?: any;
          gt?: any;
          gte?: any;
          contains?: any;
          startsWith?: any;
          endsWith?: any;
          mode?: any;
          not?:
            | string
            | {
                equals?: any;
                in?: any;
                notIn?: any;
                lt?: any;
                lte?: any;
                gt?: any;
                gte?: any;
                contains?: any;
                startsWith?: any;
                endsWith?: any;
                not?: string | any /* circular reference to NestedStringFilter */;
              };
        }
      | string;
    document_id?: any /* circular reference to StringFilter */ | string;
    commenter_id?: any /* circular reference to StringFilter */ | string;
    text?: any /* circular reference to StringFilter */ | string;
    created_at?:
      | {
          equals?: any;
          in?: any;
          notIn?: any;
          lt?: any;
          lte?: any;
          gt?: any;
          gte?: any;
          not?:
            | Date
            | {
                equals?: any;
                in?: any;
                notIn?: any;
                lt?: any;
                lte?: any;
                gt?: any;
                gte?: any;
                not?: Date | any /* circular reference to NestedDateTimeFilter */;
              };
        }
      | Date;
    edited_at?: any;
    is_deleted?: any;
    user_document?:
      | {
          is?: {
            AND?: any /* circular reference to UserDocumentWhereInput */;
            OR?: any /* circular reference to UserDocumentWhereInput */;
            NOT?: any /* circular reference to UserDocumentWhereInput */;
            document_id?: any /* circular reference to StringFilter */ | string;
            owner_profile_id?: any /* circular reference to StringFilter */ | string;
            title?: any /* circular reference to StringFilter */ | string;
            content?: any /* circular reference to StringFilter */ | string;
            status?:
              | {
                  equals?: any;
                  in?: any;
                  notIn?: any;
                  not?:
                    | "DRAFT"
                    | "REVIEW"
                    | "PUBLISHED"
                    | "ARCHIVED"
                    | {
                        equals?: any /* max depth reached */;
                        in?: any /* max depth reached */;
                        notIn?: any /* max depth reached */;
                        not?: any /* max depth reached */;
                      };
                }
              | "DRAFT"
              | "REVIEW"
              | "PUBLISHED"
              | "ARCHIVED";
            created_at?: any /* circular reference to DateTimeFilter */ | Date;
            updated_at?: any;
            archived?: any;
            user_profile?:
              | {
                  is?: {
                    AND?: any /* max depth reached */;
                    OR?: any /* max depth reached */;
                    NOT?: any /* max depth reached */;
                    profile_id?: any /* max depth reached */;
                    created_timestamp?: any /* max depth reached */;
                    updated_timestamp?: any /* max depth reached */;
                    deactivated?: any /* max depth reached */;
                    full_name?: any /* max depth reached */;
                    email_address?: any /* max depth reached */;
                    phone_number?: any /* max depth reached */;
                    password_hash?: any /* max depth reached */;
                    account_level?: any /* max depth reached */;
                    created_by_id?: any /* max depth reached */;
                    user_documents?: any /* max depth reached */;
                    user_notifications?: any /* max depth reached */;
                    user_accounts?: any /* max depth reached */;
                    user_two_step_codes?: any /* max depth reached */;
                    user_comments?: any /* max depth reached */;
                    created_by_profile?: any /* max depth reached */;
                    profiles_created?: any /* max depth reached */;
                    threads_as_primary_participant?: any /* max depth reached */;
                    threads_as_secondary_participant?: any /* max depth reached */;
                    sent_messages?: any /* max depth reached */;
                    org_memberships?: any /* max depth reached */;
                    payments?: any /* max depth reached */;
                  };
                  isNot?: any /* circular reference to UserProfileWhereInput */;
                }
              | any /* circular reference to UserProfileWhereInput */;
            comments?: {
              every?: any /* circular reference to UserCommentWhereInput */;
              some?: any /* circular reference to UserCommentWhereInput */;
              none?: any /* circular reference to UserCommentWhereInput */;
            };
          };
          isNot?: any /* circular reference to UserDocumentWhereInput */;
        }
      | any /* circular reference to UserDocumentWhereInput */;
    user_profile?:
      | any /* circular reference to UserProfileRelationFilter */
      | any /* circular reference to UserProfileWhereInput */;
  };
}

import { z } from "zod";

export const ManyUserCommentDeleteArgsSchema = z.object({
  where: z.any().optional(),
});
