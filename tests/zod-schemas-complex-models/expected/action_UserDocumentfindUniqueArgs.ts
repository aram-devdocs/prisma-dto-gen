// Auto-generated by prisma-dto-gen (refactored inline)

type Decimal = { valueOf(): string };

export interface UserDocumentFindUniqueArgs {
  where: {
    document_id?: string;
    AND?:
      | {
          AND?: any /* circular reference to UserDocumentWhereInput */;
          OR?: any /* circular reference to UserDocumentWhereInput */;
          NOT?: any /* circular reference to UserDocumentWhereInput */;
          document_id?:
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
                      equals?: any;
                      in?: any;
                      notIn?: any;
                      not?:
                        | "DRAFT"
                        | "REVIEW"
                        | "PUBLISHED"
                        | "ARCHIVED"
                        | any /* circular reference to NestedEnumDocumentStatusFilter */;
                    };
              }
            | "DRAFT"
            | "REVIEW"
            | "PUBLISHED"
            | "ARCHIVED";
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
          updated_at?: any;
          archived?: any;
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
                    every?: any /* circular reference to UserDocumentWhereInput */;
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
                        every?: {
                          AND?: any /* circular reference to NotificationReferenceWhereInput */;
                          OR?: any /* circular reference to NotificationReferenceWhereInput */;
                          NOT?: any /* circular reference to NotificationReferenceWhereInput */;
                          notification_reference_id?:
                            | any /* circular reference to StringFilter */
                            | string;
                          notification_id?: any /* circular reference to StringFilter */ | string;
                          referenced_entity_id?:
                            | any /* circular reference to StringFilter */
                            | string;
                          status?:
                            | any /* circular reference to EnumDocumentStatusFilter */
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
                            equals?: any;
                            not?:
                              | boolean
                              | {
                                  equals?: any;
                                  not?: boolean | any /* circular reference to NestedBoolFilter */;
                                };
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
                            equals?: any;
                            in?: any;
                            notIn?: any;
                            not?:
                              | "EMAIL"
                              | "SMS"
                              | "PUSH"
                              | {
                                  equals?: any;
                                  in?: any;
                                  notIn?: any;
                                  not?:
                                    | "EMAIL"
                                    | "SMS"
                                    | "PUSH"
                                    | any /* circular reference to NestedEnumTwoStepVerificationTypeFilter */;
                                };
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
                  user_comments?: {
                    every?: {
                      AND?: any /* circular reference to UserCommentWhereInput */;
                      OR?: any /* circular reference to UserCommentWhereInput */;
                      NOT?: any /* circular reference to UserCommentWhereInput */;
                      comment_id?: any /* circular reference to StringFilter */ | string;
                      document_id?: any /* circular reference to StringFilter */ | string;
                      commenter_id?: any /* circular reference to StringFilter */ | string;
                      text?: any /* circular reference to StringFilter */ | string;
                      created_at?: any /* circular reference to DateTimeFilter */ | Date;
                      edited_at?: any;
                      is_deleted?: any;
                      user_document?:
                        | {
                            is?: any /* circular reference to UserDocumentWhereInput */;
                            isNot?: any /* circular reference to UserDocumentWhereInput */;
                          }
                        | any /* circular reference to UserDocumentWhereInput */;
                      user_profile?:
                        | any /* circular reference to UserProfileRelationFilter */
                        | any /* circular reference to UserProfileWhereInput */;
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
                        every?: {
                          AND?: any /* circular reference to ThreadMessageWhereInput */;
                          OR?: any /* circular reference to ThreadMessageWhereInput */;
                          NOT?: any /* circular reference to ThreadMessageWhereInput */;
                          message_id?: any /* circular reference to StringFilter */ | string;
                          thread_id?: any /* circular reference to StringFilter */ | string;
                          sender_id?: any /* circular reference to StringFilter */ | string;
                          content?: any /* circular reference to StringFilter */ | string;
                          sent_at?: any /* circular reference to DateTimeFilter */ | Date;
                          updated_at?: any;
                          is_archived?: any;
                          discussion_thread?:
                            | {
                                is?: any /* circular reference to DiscussionThreadWhereInput */;
                                isNot?: any /* circular reference to DiscussionThreadWhereInput */;
                              }
                            | any /* circular reference to DiscussionThreadWhereInput */;
                          sender?:
                            | any /* circular reference to UserProfileRelationFilter */
                            | any /* circular reference to UserProfileWhereInput */;
                        };
                        some?: any /* circular reference to ThreadMessageWhereInput */;
                        none?: any /* circular reference to ThreadMessageWhereInput */;
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
                            is?: {
                              AND?: any /* circular reference to OrganizationWhereInput */;
                              OR?: any /* circular reference to OrganizationWhereInput */;
                              NOT?: any /* circular reference to OrganizationWhereInput */;
                              organization_id?:
                                | any /* circular reference to StringFilter */
                                | string;
                              name?: any /* circular reference to StringFilter */ | string;
                              description?: any;
                              created_on?: any /* circular reference to DateTimeFilter */ | Date;
                              updated_on?: any;
                              is_active?: any;
                              events?: {
                                every?: {
                                  AND?: any /* circular reference to OrgEventWhereInput */;
                                  OR?: any /* circular reference to OrgEventWhereInput */;
                                  NOT?: any /* circular reference to OrgEventWhereInput */;
                                  org_event_id?:
                                    | any /* circular reference to StringFilter */
                                    | string;
                                  organization_id?:
                                    | any /* circular reference to StringFilter */
                                    | string;
                                  event_name?:
                                    | any /* circular reference to StringFilter */
                                    | string;
                                  start_time?:
                                    | any /* circular reference to DateTimeFilter */
                                    | Date;
                                  end_time?: any;
                                  location?: any;
                                  organization?:
                                    | any /* circular reference to OrganizationRelationFilter */
                                    | any /* circular reference to OrganizationWhereInput */;
                                };
                                some?: any /* circular reference to OrgEventWhereInput */;
                                none?: any /* circular reference to OrgEventWhereInput */;
                              };
                              members?: any /* circular reference to OrgMembershipListRelationFilter */;
                              records?: {
                                every?: {
                                  AND?: any /* circular reference to OrgRecordWhereInput */;
                                  OR?: any /* circular reference to OrgRecordWhereInput */;
                                  NOT?: any /* circular reference to OrgRecordWhereInput */;
                                  record_id?: any /* circular reference to StringFilter */ | string;
                                  organization_id?:
                                    | any /* circular reference to StringFilter */
                                    | string;
                                  title?: any /* circular reference to StringFilter */ | string;
                                  details?: any;
                                  created_on?:
                                    | any /* circular reference to DateTimeFilter */
                                    | Date;
                                  updated_on?: any;
                                  organization?:
                                    | any /* circular reference to OrganizationRelationFilter */
                                    | any /* circular reference to OrganizationWhereInput */;
                                };
                                some?: any /* circular reference to OrgRecordWhereInput */;
                                none?: any /* circular reference to OrgRecordWhereInput */;
                              };
                            };
                            isNot?: any /* circular reference to OrganizationWhereInput */;
                          }
                        | any /* circular reference to OrganizationWhereInput */;
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
                            equals?: any;
                            in?: any;
                            notIn?: any;
                            lt?: any;
                            lte?: any;
                            gt?: any;
                            gte?: any;
                            not?:
                              | Decimal
                              | {
                                  equals?: any;
                                  in?: any;
                                  notIn?: any;
                                  lt?: any;
                                  lte?: any;
                                  gt?: any;
                                  gte?: any;
                                  not?:
                                    | Decimal
                                    | any /* circular reference to NestedDecimalFilter */;
                                };
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
                };
                isNot?: any /* circular reference to UserProfileWhereInput */;
              }
            | any /* circular reference to UserProfileWhereInput */;
          comments?: any /* circular reference to UserCommentListRelationFilter */;
        }
      | any /* circular reference to UserDocumentWhereInput */;
    OR?: any /* circular reference to UserDocumentWhereInput */;
    NOT?: any /* circular reference to UserDocumentWhereInput */;
    owner_profile_id?: any /* circular reference to StringFilter */ | string;
    title?: any /* circular reference to StringFilter */ | string;
    content?: any /* circular reference to StringFilter */ | string;
    status?:
      | any /* circular reference to EnumDocumentStatusFilter */
      | "DRAFT"
      | "REVIEW"
      | "PUBLISHED"
      | "ARCHIVED";
    created_at?: any /* circular reference to DateTimeFilter */ | Date;
    updated_at?: any;
    archived?: any;
    user_profile?:
      | any /* circular reference to UserProfileRelationFilter */
      | any /* circular reference to UserProfileWhereInput */;
    comments?: any /* circular reference to UserCommentListRelationFilter */;
  };
}

import { z } from "zod";

export const UserDocumentFindUniqueArgsSchema = z.object({
  where: z.any(),
});
