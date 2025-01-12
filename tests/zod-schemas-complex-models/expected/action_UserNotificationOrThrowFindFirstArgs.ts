// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserNotificationOrThrowFindFirstArgs {
  where?: {
    AND?: any /* circular reference to UserNotificationWhereInput */;
    OR?: any /* circular reference to UserNotificationWhereInput */;
    NOT?: any /* circular reference to UserNotificationWhereInput */;
    notification_id?:
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
    recipient_profile_id?: any /* circular reference to StringFilter */ | string;
    sent_timestamp?:
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
    read_timestamp?: any;
    message?: any /* circular reference to StringFilter */ | string;
    notification_refs?: {
      every?: {
        AND?: any /* circular reference to NotificationReferenceWhereInput */;
        OR?: any /* circular reference to NotificationReferenceWhereInput */;
        NOT?: any /* circular reference to NotificationReferenceWhereInput */;
        notification_reference_id?: any /* circular reference to StringFilter */ | string;
        notification_id?: any /* circular reference to StringFilter */ | string;
        referenced_entity_id?: any /* circular reference to StringFilter */ | string;
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
        archived?: any;
        notification?:
          | {
              is?: any /* circular reference to UserNotificationWhereInput */;
              isNot?: any /* circular reference to UserNotificationWhereInput */;
            }
          | any /* circular reference to UserNotificationWhereInput */;
      };
      some?: any /* circular reference to NotificationReferenceWhereInput */;
      none?: any /* circular reference to NotificationReferenceWhereInput */;
    };
    user_profile?:
      | {
          is?: {
            AND?: any /* circular reference to UserProfileWhereInput */;
            OR?: any /* circular reference to UserProfileWhereInput */;
            NOT?: any /* circular reference to UserProfileWhereInput */;
            profile_id?: any /* circular reference to StringFilter */ | string;
            created_timestamp?: any /* circular reference to DateTimeFilter */ | Date;
            updated_timestamp?: any;
            deactivated?: any;
            full_name?: any /* circular reference to StringFilter */ | string;
            email_address?: any;
            phone_number?: any;
            password_hash?: any;
            account_level?: any;
            created_by_id?: any;
            user_documents?: {
              every?: {
                AND?: any /* max depth reached */;
                OR?: any /* max depth reached */;
                NOT?: any /* max depth reached */;
                document_id?: any /* max depth reached */;
                owner_profile_id?: any /* max depth reached */;
                title?: any /* max depth reached */;
                content?: any /* max depth reached */;
                status?: any /* max depth reached */;
                created_at?: any /* max depth reached */;
                updated_at?: any /* max depth reached */;
                archived?: any /* max depth reached */;
                user_profile?: any /* max depth reached */;
                comments?: any /* max depth reached */;
              };
              some?: any /* circular reference to UserDocumentWhereInput */;
              none?: any /* circular reference to UserDocumentWhereInput */;
            };
            user_notifications?: {
              every?: any /* circular reference to UserNotificationWhereInput */;
              some?: any /* circular reference to UserNotificationWhereInput */;
              none?: any /* circular reference to UserNotificationWhereInput */;
            };
            user_accounts?: {
              every?: {
                AND?: any /* max depth reached */;
                OR?: any /* max depth reached */;
                NOT?: any /* max depth reached */;
                account_id?: any /* max depth reached */;
                owner_profile_id?: any /* max depth reached */;
                name?: any /* max depth reached */;
                created_at?: any /* max depth reached */;
                modified_at?: any /* max depth reached */;
                is_active?: any /* max depth reached */;
                user_profile?: any /* max depth reached */;
              };
              some?: any /* circular reference to UserAccountWhereInput */;
              none?: any /* circular reference to UserAccountWhereInput */;
            };
            user_two_step_codes?: {
              every?: {
                AND?: any /* max depth reached */;
                OR?: any /* max depth reached */;
                NOT?: any /* max depth reached */;
                verification_id?: any /* max depth reached */;
                profile_id?: any /* max depth reached */;
                code?: any /* max depth reached */;
                is_verified?: any /* max depth reached */;
                created_at?: any /* max depth reached */;
                verification_type?: any /* max depth reached */;
                user_profile?: any /* max depth reached */;
              };
              some?: any /* circular reference to TwoStepVerificationWhereInput */;
              none?: any /* circular reference to TwoStepVerificationWhereInput */;
            };
            user_comments?: {
              every?: {
                AND?: any /* max depth reached */;
                OR?: any /* max depth reached */;
                NOT?: any /* max depth reached */;
                comment_id?: any /* max depth reached */;
                document_id?: any /* max depth reached */;
                commenter_id?: any /* max depth reached */;
                text?: any /* max depth reached */;
                created_at?: any /* max depth reached */;
                edited_at?: any /* max depth reached */;
                is_deleted?: any /* max depth reached */;
                user_document?: any /* max depth reached */;
                user_profile?: any /* max depth reached */;
              };
              some?: any /* circular reference to UserCommentWhereInput */;
              none?: any /* circular reference to UserCommentWhereInput */;
            };
            created_by_profile?: any;
            profiles_created?: {
              every?: any /* circular reference to UserProfileWhereInput */;
              some?: any /* circular reference to UserProfileWhereInput */;
              none?: any /* circular reference to UserProfileWhereInput */;
            };
            threads_as_primary_participant?: {
              every?: {
                AND?: any /* max depth reached */;
                OR?: any /* max depth reached */;
                NOT?: any /* max depth reached */;
                thread_id?: any /* max depth reached */;
                primary_participant?: any /* max depth reached */;
                secondary_participant?: any /* max depth reached */;
                created_on?: any /* max depth reached */;
                closed_on?: any /* max depth reached */;
                is_flagged?: any /* max depth reached */;
                flagged_reason?: any /* max depth reached */;
                participant_one?: any /* max depth reached */;
                participant_two?: any /* max depth reached */;
                messages?: any /* max depth reached */;
              };
              some?: any /* circular reference to DiscussionThreadWhereInput */;
              none?: any /* circular reference to DiscussionThreadWhereInput */;
            };
            threads_as_secondary_participant?: any /* circular reference to DiscussionThreadListRelationFilter */;
            sent_messages?: {
              every?: {
                AND?: any /* max depth reached */;
                OR?: any /* max depth reached */;
                NOT?: any /* max depth reached */;
                message_id?: any /* max depth reached */;
                thread_id?: any /* max depth reached */;
                sender_id?: any /* max depth reached */;
                content?: any /* max depth reached */;
                sent_at?: any /* max depth reached */;
                updated_at?: any /* max depth reached */;
                is_archived?: any /* max depth reached */;
                discussion_thread?: any /* max depth reached */;
                sender?: any /* max depth reached */;
              };
              some?: any /* circular reference to ThreadMessageWhereInput */;
              none?: any /* circular reference to ThreadMessageWhereInput */;
            };
            org_memberships?: {
              every?: {
                AND?: any /* max depth reached */;
                OR?: any /* max depth reached */;
                NOT?: any /* max depth reached */;
                membership_id?: any /* max depth reached */;
                organization_id?: any /* max depth reached */;
                profile_id?: any /* max depth reached */;
                joined_on?: any /* max depth reached */;
                is_active?: any /* max depth reached */;
                organization?: any /* max depth reached */;
                user_profile?: any /* max depth reached */;
              };
              some?: any /* circular reference to OrgMembershipWhereInput */;
              none?: any /* circular reference to OrgMembershipWhereInput */;
            };
            payments?: {
              every?: {
                AND?: any /* max depth reached */;
                OR?: any /* max depth reached */;
                NOT?: any /* max depth reached */;
                payment_id?: any /* max depth reached */;
                payer_id?: any /* max depth reached */;
                amount?: any /* max depth reached */;
                paid_at?: any /* max depth reached */;
                status?: any /* max depth reached */;
                reference_note?: any /* max depth reached */;
                payer?: any /* max depth reached */;
              };
              some?: any /* circular reference to PaymentWhereInput */;
              none?: any /* circular reference to PaymentWhereInput */;
            };
          };
          isNot?: any /* circular reference to UserProfileWhereInput */;
        }
      | any /* circular reference to UserProfileWhereInput */;
  };
  orderBy?:
    | {
        notification_id?: any;
        recipient_profile_id?: any;
        sent_timestamp?: any;
        read_timestamp?: any;
        message?: any;
        notification_refs?: {
          _count?: any;
        };
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
      }[]
    | any /* circular reference to UserNotificationOrderByWithRelationInput */;
  cursor?: {
    notification_id?: string;
    AND?: any /* circular reference to UserNotificationWhereInput */;
    OR?: any /* circular reference to UserNotificationWhereInput */;
    NOT?: any /* circular reference to UserNotificationWhereInput */;
    recipient_profile_id?: any /* circular reference to StringFilter */ | string;
    sent_timestamp?: any /* circular reference to DateTimeFilter */ | Date;
    read_timestamp?: any;
    message?: any /* circular reference to StringFilter */ | string;
    notification_refs?: any /* circular reference to NotificationReferenceListRelationFilter */;
    user_profile?:
      | any /* circular reference to UserProfileRelationFilter */
      | any /* circular reference to UserProfileWhereInput */;
  };
  take?: number;
  skip?: number;
  distinct?: any;
}

import { z } from "zod";

export const UserNotificationOrThrowFindFirstArgsSchema = z.object({
  where: z.any().optional(),
  orderBy: z.array(z.any()).optional(),
  cursor: z.any().optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.any().optional(),
});
