// Auto-generated by prisma-dto-gen (refactored inline)

type Decimal = { valueOf(): string };

export interface OneUserProfileDeleteArgs {
  where: {
    profile_id?: string;
    email_address?: string;
    AND?:
      | {
          AND?: any /* circular reference to UserProfileWhereInput */;
          OR?: any /* circular reference to UserProfileWhereInput */;
          NOT?: any /* circular reference to UserProfileWhereInput */;
          profile_id?:
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
          created_timestamp?:
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
              AND?: any /* circular reference to UserDocumentWhereInput */;
              OR?: any /* circular reference to UserDocumentWhereInput */;
              NOT?: any /* circular reference to UserDocumentWhereInput */;
              document_id?: any /* circular reference to StringFilter */ | string;
              owner_profile_id?: any /* circular reference to StringFilter */ | string;
              title?: any /* circular reference to StringFilter */ | string;
              content?: any /* circular reference to StringFilter */ | string;
              status?:
                | {
                    equals?: any /* max depth reached */;
                    in?: any /* max depth reached */;
                    notIn?: any /* max depth reached */;
                    not?: any /* max depth reached */;
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
                    is?: any /* max depth reached */;
                    isNot?: any /* max depth reached */;
                  }
                | any /* circular reference to UserProfileWhereInput */;
              comments?: {
                every?: any /* max depth reached */;
                some?: any /* max depth reached */;
                none?: any /* max depth reached */;
              };
            };
            some?: any /* circular reference to UserDocumentWhereInput */;
            none?: any /* circular reference to UserDocumentWhereInput */;
          };
          user_notifications?: {
            every?: {
              AND?: any /* circular reference to UserNotificationWhereInput */;
              OR?: any /* circular reference to UserNotificationWhereInput */;
              NOT?: any /* circular reference to UserNotificationWhereInput */;
              notification_id?: any /* circular reference to StringFilter */ | string;
              recipient_profile_id?: any /* circular reference to StringFilter */ | string;
              sent_timestamp?: any /* circular reference to DateTimeFilter */ | Date;
              read_timestamp?: any;
              message?: any /* circular reference to StringFilter */ | string;
              notification_refs?: {
                every?: any /* max depth reached */;
                some?: any /* max depth reached */;
                none?: any /* max depth reached */;
              };
              user_profile?:
                | any /* circular reference to UserProfileRelationFilter */
                | any /* circular reference to UserProfileWhereInput */;
            };
            some?: any /* circular reference to UserNotificationWhereInput */;
            none?: any /* circular reference to UserNotificationWhereInput */;
          };
          user_accounts?: {
            every?: {
              AND?: any /* circular reference to UserAccountWhereInput */;
              OR?: any /* circular reference to UserAccountWhereInput */;
              NOT?: any /* circular reference to UserAccountWhereInput */;
              account_id?: any /* circular reference to StringFilter */ | string;
              owner_profile_id?: any /* circular reference to StringFilter */ | string;
              name?: any /* circular reference to StringFilter */ | string;
              created_at?: any /* circular reference to DateTimeFilter */ | Date;
              modified_at?: any;
              is_active?:
                | {
                    equals?: any /* max depth reached */;
                    not?: any /* max depth reached */;
                  }
                | boolean;
              user_profile?:
                | any /* circular reference to UserProfileRelationFilter */
                | any /* circular reference to UserProfileWhereInput */;
            };
            some?: any /* circular reference to UserAccountWhereInput */;
            none?: any /* circular reference to UserAccountWhereInput */;
          };
          user_two_step_codes?: {
            every?: {
              AND?: any /* circular reference to TwoStepVerificationWhereInput */;
              OR?: any /* circular reference to TwoStepVerificationWhereInput */;
              NOT?: any /* circular reference to TwoStepVerificationWhereInput */;
              verification_id?: any /* circular reference to StringFilter */ | string;
              profile_id?: any /* circular reference to StringFilter */ | string;
              code?: any;
              is_verified?: any /* circular reference to BoolFilter */ | boolean;
              created_at?: any /* circular reference to DateTimeFilter */ | Date;
              verification_type?:
                | {
                    equals?: any /* max depth reached */;
                    in?: any /* max depth reached */;
                    notIn?: any /* max depth reached */;
                    not?: any /* max depth reached */;
                  }
                | "EMAIL"
                | "SMS"
                | "PUSH";
              user_profile?:
                | any /* circular reference to UserProfileRelationFilter */
                | any /* circular reference to UserProfileWhereInput */;
            };
            some?: any /* circular reference to TwoStepVerificationWhereInput */;
            none?: any /* circular reference to TwoStepVerificationWhereInput */;
          };
          user_comments?: any /* circular reference to UserCommentListRelationFilter */;
          created_by_profile?: any;
          profiles_created?: {
            every?: any /* circular reference to UserProfileWhereInput */;
            some?: any /* circular reference to UserProfileWhereInput */;
            none?: any /* circular reference to UserProfileWhereInput */;
          };
          threads_as_primary_participant?: {
            every?: {
              AND?: any /* circular reference to DiscussionThreadWhereInput */;
              OR?: any /* circular reference to DiscussionThreadWhereInput */;
              NOT?: any /* circular reference to DiscussionThreadWhereInput */;
              thread_id?: any /* circular reference to StringFilter */ | string;
              primary_participant?: any /* circular reference to StringFilter */ | string;
              secondary_participant?: any;
              created_on?: any /* circular reference to DateTimeFilter */ | Date;
              closed_on?: any;
              is_flagged?: any;
              flagged_reason?: any;
              participant_one?:
                | any /* circular reference to UserProfileRelationFilter */
                | any /* circular reference to UserProfileWhereInput */;
              participant_two?: any;
              messages?: {
                every?: any /* max depth reached */;
                some?: any /* max depth reached */;
                none?: any /* max depth reached */;
              };
            };
            some?: any /* circular reference to DiscussionThreadWhereInput */;
            none?: any /* circular reference to DiscussionThreadWhereInput */;
          };
          threads_as_secondary_participant?: any /* circular reference to DiscussionThreadListRelationFilter */;
          sent_messages?: any /* circular reference to ThreadMessageListRelationFilter */;
          org_memberships?: {
            every?: {
              AND?: any /* circular reference to OrgMembershipWhereInput */;
              OR?: any /* circular reference to OrgMembershipWhereInput */;
              NOT?: any /* circular reference to OrgMembershipWhereInput */;
              membership_id?: any /* circular reference to StringFilter */ | string;
              organization_id?: any /* circular reference to StringFilter */ | string;
              profile_id?: any /* circular reference to StringFilter */ | string;
              joined_on?: any /* circular reference to DateTimeFilter */ | Date;
              is_active?: any;
              organization?:
                | {
                    is?: any /* max depth reached */;
                    isNot?: any /* max depth reached */;
                  }
                | {
                    AND?: any /* max depth reached */;
                    OR?: any /* max depth reached */;
                    NOT?: any /* max depth reached */;
                    organization_id?: any /* max depth reached */;
                    name?: any /* max depth reached */;
                    description?: any /* max depth reached */;
                    created_on?: any /* max depth reached */;
                    updated_on?: any /* max depth reached */;
                    is_active?: any /* max depth reached */;
                    events?: any /* max depth reached */;
                    members?: any /* max depth reached */;
                    records?: any /* max depth reached */;
                  };
              user_profile?:
                | any /* circular reference to UserProfileRelationFilter */
                | any /* circular reference to UserProfileWhereInput */;
            };
            some?: any /* circular reference to OrgMembershipWhereInput */;
            none?: any /* circular reference to OrgMembershipWhereInput */;
          };
          payments?: {
            every?: {
              AND?: any /* circular reference to PaymentWhereInput */;
              OR?: any /* circular reference to PaymentWhereInput */;
              NOT?: any /* circular reference to PaymentWhereInput */;
              payment_id?: any /* circular reference to StringFilter */ | string;
              payer_id?: any /* circular reference to StringFilter */ | string;
              amount?:
                | {
                    equals?: any /* max depth reached */;
                    in?: any /* max depth reached */;
                    notIn?: any /* max depth reached */;
                    lt?: any /* max depth reached */;
                    lte?: any /* max depth reached */;
                    gt?: any /* max depth reached */;
                    gte?: any /* max depth reached */;
                    not?: any /* max depth reached */;
                  }
                | Decimal;
              paid_at?: any /* circular reference to DateTimeFilter */ | Date;
              status?:
                | any /* circular reference to EnumDocumentStatusFilter */
                | "DRAFT"
                | "REVIEW"
                | "PUBLISHED"
                | "ARCHIVED";
              reference_note?: any;
              payer?:
                | any /* circular reference to UserProfileRelationFilter */
                | any /* circular reference to UserProfileWhereInput */;
            };
            some?: any /* circular reference to PaymentWhereInput */;
            none?: any /* circular reference to PaymentWhereInput */;
          };
        }
      | any /* circular reference to UserProfileWhereInput */;
    OR?: any /* circular reference to UserProfileWhereInput */;
    NOT?: any /* circular reference to UserProfileWhereInput */;
    created_timestamp?: any /* circular reference to DateTimeFilter */ | Date;
    updated_timestamp?: any;
    deactivated?: any;
    full_name?: any /* circular reference to StringFilter */ | string;
    phone_number?: any;
    password_hash?: any;
    account_level?: any;
    created_by_id?: any;
    user_documents?: any /* circular reference to UserDocumentListRelationFilter */;
    user_notifications?: any /* circular reference to UserNotificationListRelationFilter */;
    user_accounts?: any /* circular reference to UserAccountListRelationFilter */;
    user_two_step_codes?: any /* circular reference to TwoStepVerificationListRelationFilter */;
    user_comments?: any /* circular reference to UserCommentListRelationFilter */;
    created_by_profile?: any;
    profiles_created?: any /* circular reference to UserProfileListRelationFilter */;
    threads_as_primary_participant?: any /* circular reference to DiscussionThreadListRelationFilter */;
    threads_as_secondary_participant?: any /* circular reference to DiscussionThreadListRelationFilter */;
    sent_messages?: any /* circular reference to ThreadMessageListRelationFilter */;
    org_memberships?: any /* circular reference to OrgMembershipListRelationFilter */;
    payments?: any /* circular reference to PaymentListRelationFilter */;
  };
}

import { z } from "zod";

export const OneUserProfileDeleteArgsSchema = z.object({
  where: z.any(),
});