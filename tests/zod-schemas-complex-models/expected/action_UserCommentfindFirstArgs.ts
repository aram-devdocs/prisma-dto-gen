// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserCommentFindFirstArgs {
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
  orderBy?:
    | {
        comment_id?: any;
        document_id?: any;
        commenter_id?: any;
        text?: any;
        created_at?: any;
        edited_at?: any;
        is_deleted?: any;
        user_document?: {
          document_id?: any;
          owner_profile_id?: any;
          title?: any;
          content?: any;
          status?: any;
          created_at?: any;
          updated_at?: any;
          archived?: any;
          user_profile?: {
            profile_id?: any;
            created_timestamp?: any;
            updated_timestamp?: any;
            deactivated?: any;
            full_name?: any;
            email_address?: any;
            phone_number?: any;
            password_hash?: any;
            account_level?: any;
            created_by_id?: any;
            user_documents?: {
              _count?: any;
            };
            user_notifications?: {
              _count?: any;
            };
            user_accounts?: {
              _count?: any;
            };
            user_two_step_codes?: {
              _count?: any;
            };
            user_comments?: {
              _count?: any;
            };
            created_by_profile?: any /* circular reference to UserProfileOrderByWithRelationInput */;
            profiles_created?: {
              _count?: any;
            };
            threads_as_primary_participant?: {
              _count?: any;
            };
            threads_as_secondary_participant?: any /* circular reference to DiscussionThreadOrderByRelationAggregateInput */;
            sent_messages?: {
              _count?: any;
            };
            org_memberships?: {
              _count?: any;
            };
            payments?: {
              _count?: any;
            };
          };
          comments?: any /* circular reference to UserCommentOrderByRelationAggregateInput */;
        };
        user_profile?: any /* circular reference to UserProfileOrderByWithRelationInput */;
      }[]
    | any /* circular reference to UserCommentOrderByWithRelationInput */;
  cursor?: {
    comment_id?: string;
    AND?: any /* circular reference to UserCommentWhereInput */;
    OR?: any /* circular reference to UserCommentWhereInput */;
    NOT?: any /* circular reference to UserCommentWhereInput */;
    document_id?: any /* circular reference to StringFilter */ | string;
    commenter_id?: any /* circular reference to StringFilter */ | string;
    text?: any /* circular reference to StringFilter */ | string;
    created_at?: any /* circular reference to DateTimeFilter */ | Date;
    edited_at?: any;
    is_deleted?: any;
    user_document?:
      | any /* circular reference to UserDocumentRelationFilter */
      | any /* circular reference to UserDocumentWhereInput */;
    user_profile?:
      | any /* circular reference to UserProfileRelationFilter */
      | any /* circular reference to UserProfileWhereInput */;
  };
  take?: number;
  skip?: number;
  distinct?: any;
}

import { z } from "zod";

export const UserCommentFindFirstArgsSchema = z.object({
  where: z.any().optional(),
  orderBy: z.array(z.any()).optional(),
  cursor: z.any().optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.any().optional(),
});
