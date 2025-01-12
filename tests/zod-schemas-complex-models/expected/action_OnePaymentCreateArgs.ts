// Auto-generated by prisma-dto-gen (refactored inline)

type Decimal = { valueOf(): string };

export interface OnePaymentCreateArgs {
  data:
    | {
        payment_id?: string;
        amount: Decimal;
        paid_at?: Date;
        status?: "DRAFT" | "REVIEW" | "PUBLISHED" | "ARCHIVED";
        reference_note?: any;
        payer: {
          create?:
            | {
                profile_id?: string;
                created_timestamp?: Date;
                updated_timestamp?: any;
                deactivated?: any;
                full_name: string;
                email_address?: any;
                phone_number?: any;
                password_hash?: any;
                account_level?: any;
                user_documents?: {
                  create?:
                    | {
                        document_id?: any /* max depth reached */;
                        title: any /* max depth reached */;
                        content: any /* max depth reached */;
                        status?: any /* max depth reached */;
                        created_at?: any /* max depth reached */;
                        updated_at?: any /* max depth reached */;
                        archived?: any /* max depth reached */;
                        comments?: any /* max depth reached */;
                      }
                    | any /* circular reference to UserDocumentCreateWithoutUser_profileInput */
                    | any /* circular reference to UserDocumentUncheckedCreateWithoutUser_profileInput */;
                  connectOrCreate?:
                    | {
                        where: any /* max depth reached */;
                        create: any /* max depth reached */;
                      }
                    | any /* circular reference to UserDocumentCreateOrConnectWithoutUser_profileInput */;
                  createMany?: {
                    data: any /* max depth reached */;
                    skipDuplicates?: any /* max depth reached */;
                  };
                  connect?:
                    | {
                        document_id?: any /* max depth reached */;
                        AND?: any /* max depth reached */;
                        OR?: any /* max depth reached */;
                        NOT?: any /* max depth reached */;
                        owner_profile_id?: any /* max depth reached */;
                        title?: any /* max depth reached */;
                        content?: any /* max depth reached */;
                        status?: any /* max depth reached */;
                        created_at?: any /* max depth reached */;
                        updated_at?: any /* max depth reached */;
                        archived?: any /* max depth reached */;
                        user_profile?: any /* max depth reached */;
                        comments?: any /* max depth reached */;
                      }
                    | any /* circular reference to UserDocumentWhereUniqueInput */;
                };
                user_notifications?: {
                  create?:
                    | {
                        notification_id?: any /* max depth reached */;
                        sent_timestamp?: any /* max depth reached */;
                        read_timestamp?: any /* max depth reached */;
                        message: any /* max depth reached */;
                        notification_refs?: any /* max depth reached */;
                      }
                    | any /* circular reference to UserNotificationCreateWithoutUser_profileInput */
                    | any /* circular reference to UserNotificationUncheckedCreateWithoutUser_profileInput */;
                  connectOrCreate?:
                    | {
                        where: any /* max depth reached */;
                        create: any /* max depth reached */;
                      }
                    | any /* circular reference to UserNotificationCreateOrConnectWithoutUser_profileInput */;
                  createMany?: {
                    data: any /* max depth reached */;
                    skipDuplicates?: any /* max depth reached */;
                  };
                  connect?:
                    | {
                        notification_id?: any /* max depth reached */;
                        AND?: any /* max depth reached */;
                        OR?: any /* max depth reached */;
                        NOT?: any /* max depth reached */;
                        recipient_profile_id?: any /* max depth reached */;
                        sent_timestamp?: any /* max depth reached */;
                        read_timestamp?: any /* max depth reached */;
                        message?: any /* max depth reached */;
                        notification_refs?: any /* max depth reached */;
                        user_profile?: any /* max depth reached */;
                      }
                    | any /* circular reference to UserNotificationWhereUniqueInput */;
                };
                user_accounts?: {
                  create?:
                    | {
                        account_id?: any /* max depth reached */;
                        name: any /* max depth reached */;
                        created_at?: any /* max depth reached */;
                        modified_at?: any /* max depth reached */;
                        is_active?: any /* max depth reached */;
                      }
                    | any /* circular reference to UserAccountCreateWithoutUser_profileInput */
                    | any /* circular reference to UserAccountUncheckedCreateWithoutUser_profileInput */;
                  connectOrCreate?:
                    | {
                        where: any /* max depth reached */;
                        create: any /* max depth reached */;
                      }
                    | any /* circular reference to UserAccountCreateOrConnectWithoutUser_profileInput */;
                  createMany?: {
                    data: any /* max depth reached */;
                    skipDuplicates?: any /* max depth reached */;
                  };
                  connect?:
                    | {
                        account_id?: any /* max depth reached */;
                        AND?: any /* max depth reached */;
                        OR?: any /* max depth reached */;
                        NOT?: any /* max depth reached */;
                        owner_profile_id?: any /* max depth reached */;
                        name?: any /* max depth reached */;
                        created_at?: any /* max depth reached */;
                        modified_at?: any /* max depth reached */;
                        is_active?: any /* max depth reached */;
                        user_profile?: any /* max depth reached */;
                      }
                    | any /* circular reference to UserAccountWhereUniqueInput */;
                };
                user_two_step_codes?: {
                  create?:
                    | {
                        verification_id?: any /* max depth reached */;
                        code?: any /* max depth reached */;
                        is_verified?: any /* max depth reached */;
                        created_at?: any /* max depth reached */;
                        verification_type: any /* max depth reached */;
                      }
                    | any /* circular reference to TwoStepVerificationCreateWithoutUser_profileInput */
                    | any /* circular reference to TwoStepVerificationUncheckedCreateWithoutUser_profileInput */;
                  connectOrCreate?:
                    | {
                        where: any /* max depth reached */;
                        create: any /* max depth reached */;
                      }
                    | any /* circular reference to TwoStepVerificationCreateOrConnectWithoutUser_profileInput */;
                  createMany?: {
                    data: any /* max depth reached */;
                    skipDuplicates?: any /* max depth reached */;
                  };
                  connect?:
                    | {
                        verification_id?: any /* max depth reached */;
                        AND?: any /* max depth reached */;
                        OR?: any /* max depth reached */;
                        NOT?: any /* max depth reached */;
                        profile_id?: any /* max depth reached */;
                        code?: any /* max depth reached */;
                        is_verified?: any /* max depth reached */;
                        created_at?: any /* max depth reached */;
                        verification_type?: any /* max depth reached */;
                        user_profile?: any /* max depth reached */;
                      }
                    | any /* circular reference to TwoStepVerificationWhereUniqueInput */;
                };
                user_comments?: {
                  create?:
                    | {
                        comment_id?: any /* max depth reached */;
                        text: any /* max depth reached */;
                        created_at?: any /* max depth reached */;
                        edited_at?: any /* max depth reached */;
                        is_deleted?: any /* max depth reached */;
                        user_document: any /* max depth reached */;
                      }
                    | any /* circular reference to UserCommentCreateWithoutUser_profileInput */
                    | {
                        comment_id?: any /* max depth reached */;
                        document_id: any /* max depth reached */;
                        text: any /* max depth reached */;
                        created_at?: any /* max depth reached */;
                        edited_at?: any /* max depth reached */;
                        is_deleted?: any /* max depth reached */;
                      }
                    | any /* circular reference to UserCommentUncheckedCreateWithoutUser_profileInput */;
                  connectOrCreate?:
                    | {
                        where: any /* max depth reached */;
                        create: any /* max depth reached */;
                      }
                    | any /* circular reference to UserCommentCreateOrConnectWithoutUser_profileInput */;
                  createMany?: {
                    data: any /* max depth reached */;
                    skipDuplicates?: any /* max depth reached */;
                  };
                  connect?:
                    | {
                        comment_id?: any /* max depth reached */;
                        AND?: any /* max depth reached */;
                        OR?: any /* max depth reached */;
                        NOT?: any /* max depth reached */;
                        document_id?: any /* max depth reached */;
                        commenter_id?: any /* max depth reached */;
                        text?: any /* max depth reached */;
                        created_at?: any /* max depth reached */;
                        edited_at?: any /* max depth reached */;
                        is_deleted?: any /* max depth reached */;
                        user_document?: any /* max depth reached */;
                        user_profile?: any /* max depth reached */;
                      }
                    | any /* circular reference to UserCommentWhereUniqueInput */;
                };
                created_by_profile?: {
                  create?:
                    | {
                        profile_id?: any /* max depth reached */;
                        created_timestamp?: any /* max depth reached */;
                        updated_timestamp?: any /* max depth reached */;
                        deactivated?: any /* max depth reached */;
                        full_name: any /* max depth reached */;
                        email_address?: any /* max depth reached */;
                        phone_number?: any /* max depth reached */;
                        password_hash?: any /* max depth reached */;
                        account_level?: any /* max depth reached */;
                        user_documents?: any /* max depth reached */;
                        user_notifications?: any /* max depth reached */;
                        user_accounts?: any /* max depth reached */;
                        user_two_step_codes?: any /* max depth reached */;
                        user_comments?: any /* max depth reached */;
                        created_by_profile?: any /* max depth reached */;
                        threads_as_primary_participant?: any /* max depth reached */;
                        threads_as_secondary_participant?: any /* max depth reached */;
                        sent_messages?: any /* max depth reached */;
                        org_memberships?: any /* max depth reached */;
                        payments?: any /* max depth reached */;
                      }
                    | {
                        profile_id?: any /* max depth reached */;
                        created_timestamp?: any /* max depth reached */;
                        updated_timestamp?: any /* max depth reached */;
                        deactivated?: any /* max depth reached */;
                        full_name: any /* max depth reached */;
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
                        threads_as_primary_participant?: any /* max depth reached */;
                        threads_as_secondary_participant?: any /* max depth reached */;
                        sent_messages?: any /* max depth reached */;
                        org_memberships?: any /* max depth reached */;
                        payments?: any /* max depth reached */;
                      };
                  connectOrCreate?: {
                    where: any /* max depth reached */;
                    create: any /* max depth reached */;
                  };
                  connect?: {
                    profile_id?: any /* max depth reached */;
                    email_address?: any /* max depth reached */;
                    AND?: any /* max depth reached */;
                    OR?: any /* max depth reached */;
                    NOT?: any /* max depth reached */;
                    created_timestamp?: any /* max depth reached */;
                    updated_timestamp?: any /* max depth reached */;
                    deactivated?: any /* max depth reached */;
                    full_name?: any /* max depth reached */;
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
                };
                profiles_created?: {
                  create?:
                    | {
                        profile_id?: any /* max depth reached */;
                        created_timestamp?: any /* max depth reached */;
                        updated_timestamp?: any /* max depth reached */;
                        deactivated?: any /* max depth reached */;
                        full_name: any /* max depth reached */;
                        email_address?: any /* max depth reached */;
                        phone_number?: any /* max depth reached */;
                        password_hash?: any /* max depth reached */;
                        account_level?: any /* max depth reached */;
                        user_documents?: any /* max depth reached */;
                        user_notifications?: any /* max depth reached */;
                        user_accounts?: any /* max depth reached */;
                        user_two_step_codes?: any /* max depth reached */;
                        user_comments?: any /* max depth reached */;
                        profiles_created?: any /* max depth reached */;
                        threads_as_primary_participant?: any /* max depth reached */;
                        threads_as_secondary_participant?: any /* max depth reached */;
                        sent_messages?: any /* max depth reached */;
                        org_memberships?: any /* max depth reached */;
                        payments?: any /* max depth reached */;
                      }
                    | any /* circular reference to UserProfileCreateWithoutCreated_by_profileInput */
                    | any /* circular reference to UserProfileUncheckedCreateWithoutCreated_by_profileInput */;
                  connectOrCreate?:
                    | {
                        where: any /* max depth reached */;
                        create: any /* max depth reached */;
                      }
                    | any /* circular reference to UserProfileCreateOrConnectWithoutCreated_by_profileInput */;
                  createMany?: {
                    data: any /* max depth reached */;
                    skipDuplicates?: any /* max depth reached */;
                  };
                  connect?: any /* circular reference to UserProfileWhereUniqueInput */;
                };
                threads_as_primary_participant?: {
                  create?:
                    | {
                        thread_id?: any /* max depth reached */;
                        created_on?: any /* max depth reached */;
                        closed_on?: any /* max depth reached */;
                        is_flagged?: any /* max depth reached */;
                        flagged_reason?: any /* max depth reached */;
                        participant_two?: any /* max depth reached */;
                        messages?: any /* max depth reached */;
                      }
                    | any /* circular reference to DiscussionThreadCreateWithoutParticipant_oneInput */
                    | {
                        thread_id?: any /* max depth reached */;
                        secondary_participant?: any /* max depth reached */;
                        created_on?: any /* max depth reached */;
                        closed_on?: any /* max depth reached */;
                        is_flagged?: any /* max depth reached */;
                        flagged_reason?: any /* max depth reached */;
                        messages?: any /* max depth reached */;
                      }
                    | any /* circular reference to DiscussionThreadUncheckedCreateWithoutParticipant_oneInput */;
                  connectOrCreate?:
                    | {
                        where: any /* max depth reached */;
                        create: any /* max depth reached */;
                      }
                    | any /* circular reference to DiscussionThreadCreateOrConnectWithoutParticipant_oneInput */;
                  createMany?: {
                    data: any /* max depth reached */;
                    skipDuplicates?: any /* max depth reached */;
                  };
                  connect?:
                    | {
                        thread_id?: any /* max depth reached */;
                        AND?: any /* max depth reached */;
                        OR?: any /* max depth reached */;
                        NOT?: any /* max depth reached */;
                        primary_participant?: any /* max depth reached */;
                        secondary_participant?: any /* max depth reached */;
                        created_on?: any /* max depth reached */;
                        closed_on?: any /* max depth reached */;
                        is_flagged?: any /* max depth reached */;
                        flagged_reason?: any /* max depth reached */;
                        participant_one?: any /* max depth reached */;
                        participant_two?: any /* max depth reached */;
                        messages?: any /* max depth reached */;
                      }
                    | any /* circular reference to DiscussionThreadWhereUniqueInput */;
                };
                threads_as_secondary_participant?: {
                  create?:
                    | {
                        thread_id?: any /* max depth reached */;
                        created_on?: any /* max depth reached */;
                        closed_on?: any /* max depth reached */;
                        is_flagged?: any /* max depth reached */;
                        flagged_reason?: any /* max depth reached */;
                        participant_one: any /* max depth reached */;
                        messages?: any /* max depth reached */;
                      }
                    | any /* circular reference to DiscussionThreadCreateWithoutParticipant_twoInput */
                    | {
                        thread_id?: any /* max depth reached */;
                        primary_participant: any /* max depth reached */;
                        created_on?: any /* max depth reached */;
                        closed_on?: any /* max depth reached */;
                        is_flagged?: any /* max depth reached */;
                        flagged_reason?: any /* max depth reached */;
                        messages?: any /* max depth reached */;
                      }
                    | any /* circular reference to DiscussionThreadUncheckedCreateWithoutParticipant_twoInput */;
                  connectOrCreate?:
                    | {
                        where: any /* max depth reached */;
                        create: any /* max depth reached */;
                      }
                    | any /* circular reference to DiscussionThreadCreateOrConnectWithoutParticipant_twoInput */;
                  createMany?: {
                    data: any /* max depth reached */;
                    skipDuplicates?: any /* max depth reached */;
                  };
                  connect?: any /* circular reference to DiscussionThreadWhereUniqueInput */;
                };
                sent_messages?: {
                  create?:
                    | {
                        message_id?: any /* max depth reached */;
                        content: any /* max depth reached */;
                        sent_at?: any /* max depth reached */;
                        updated_at?: any /* max depth reached */;
                        is_archived?: any /* max depth reached */;
                        discussion_thread: any /* max depth reached */;
                      }
                    | any /* circular reference to ThreadMessageCreateWithoutSenderInput */
                    | {
                        message_id?: any /* max depth reached */;
                        thread_id: any /* max depth reached */;
                        content: any /* max depth reached */;
                        sent_at?: any /* max depth reached */;
                        updated_at?: any /* max depth reached */;
                        is_archived?: any /* max depth reached */;
                      }
                    | any /* circular reference to ThreadMessageUncheckedCreateWithoutSenderInput */;
                  connectOrCreate?:
                    | {
                        where: any /* max depth reached */;
                        create: any /* max depth reached */;
                      }
                    | any /* circular reference to ThreadMessageCreateOrConnectWithoutSenderInput */;
                  createMany?: {
                    data: any /* max depth reached */;
                    skipDuplicates?: any /* max depth reached */;
                  };
                  connect?:
                    | {
                        message_id?: any /* max depth reached */;
                        AND?: any /* max depth reached */;
                        OR?: any /* max depth reached */;
                        NOT?: any /* max depth reached */;
                        thread_id?: any /* max depth reached */;
                        sender_id?: any /* max depth reached */;
                        content?: any /* max depth reached */;
                        sent_at?: any /* max depth reached */;
                        updated_at?: any /* max depth reached */;
                        is_archived?: any /* max depth reached */;
                        discussion_thread?: any /* max depth reached */;
                        sender?: any /* max depth reached */;
                      }
                    | any /* circular reference to ThreadMessageWhereUniqueInput */;
                };
                org_memberships?: {
                  create?:
                    | {
                        membership_id?: any /* max depth reached */;
                        joined_on?: any /* max depth reached */;
                        is_active?: any /* max depth reached */;
                        organization: any /* max depth reached */;
                      }
                    | any /* circular reference to OrgMembershipCreateWithoutUser_profileInput */
                    | {
                        membership_id?: any /* max depth reached */;
                        organization_id: any /* max depth reached */;
                        joined_on?: any /* max depth reached */;
                        is_active?: any /* max depth reached */;
                      }
                    | any /* circular reference to OrgMembershipUncheckedCreateWithoutUser_profileInput */;
                  connectOrCreate?:
                    | {
                        where: any /* max depth reached */;
                        create: any /* max depth reached */;
                      }
                    | any /* circular reference to OrgMembershipCreateOrConnectWithoutUser_profileInput */;
                  createMany?: {
                    data: any /* max depth reached */;
                    skipDuplicates?: any /* max depth reached */;
                  };
                  connect?:
                    | {
                        membership_id?: any /* max depth reached */;
                        AND?: any /* max depth reached */;
                        OR?: any /* max depth reached */;
                        NOT?: any /* max depth reached */;
                        organization_id?: any /* max depth reached */;
                        profile_id?: any /* max depth reached */;
                        joined_on?: any /* max depth reached */;
                        is_active?: any /* max depth reached */;
                        organization?: any /* max depth reached */;
                        user_profile?: any /* max depth reached */;
                      }
                    | any /* circular reference to OrgMembershipWhereUniqueInput */;
                };
              }
            | {
                profile_id?: string;
                created_timestamp?: Date;
                updated_timestamp?: any;
                deactivated?: any;
                full_name: string;
                email_address?: any;
                phone_number?: any;
                password_hash?: any;
                account_level?: any;
                created_by_id?: any;
                user_documents?: {
                  create?:
                    | any /* circular reference to UserDocumentCreateWithoutUser_profileInput */
                    | any /* circular reference to UserDocumentUncheckedCreateWithoutUser_profileInput */;
                  connectOrCreate?: any /* circular reference to UserDocumentCreateOrConnectWithoutUser_profileInput */;
                  createMany?: any /* circular reference to UserDocumentCreateManyUser_profileInputEnvelope */;
                  connect?: any /* circular reference to UserDocumentWhereUniqueInput */;
                };
                user_notifications?: {
                  create?:
                    | any /* circular reference to UserNotificationCreateWithoutUser_profileInput */
                    | any /* circular reference to UserNotificationUncheckedCreateWithoutUser_profileInput */;
                  connectOrCreate?: any /* circular reference to UserNotificationCreateOrConnectWithoutUser_profileInput */;
                  createMany?: any /* circular reference to UserNotificationCreateManyUser_profileInputEnvelope */;
                  connect?: any /* circular reference to UserNotificationWhereUniqueInput */;
                };
                user_accounts?: {
                  create?:
                    | any /* circular reference to UserAccountCreateWithoutUser_profileInput */
                    | any /* circular reference to UserAccountUncheckedCreateWithoutUser_profileInput */;
                  connectOrCreate?: any /* circular reference to UserAccountCreateOrConnectWithoutUser_profileInput */;
                  createMany?: any /* circular reference to UserAccountCreateManyUser_profileInputEnvelope */;
                  connect?: any /* circular reference to UserAccountWhereUniqueInput */;
                };
                user_two_step_codes?: {
                  create?:
                    | any /* circular reference to TwoStepVerificationCreateWithoutUser_profileInput */
                    | any /* circular reference to TwoStepVerificationUncheckedCreateWithoutUser_profileInput */;
                  connectOrCreate?: any /* circular reference to TwoStepVerificationCreateOrConnectWithoutUser_profileInput */;
                  createMany?: any /* circular reference to TwoStepVerificationCreateManyUser_profileInputEnvelope */;
                  connect?: any /* circular reference to TwoStepVerificationWhereUniqueInput */;
                };
                user_comments?: {
                  create?:
                    | any /* circular reference to UserCommentCreateWithoutUser_profileInput */
                    | any /* circular reference to UserCommentUncheckedCreateWithoutUser_profileInput */;
                  connectOrCreate?: any /* circular reference to UserCommentCreateOrConnectWithoutUser_profileInput */;
                  createMany?: any /* circular reference to UserCommentCreateManyUser_profileInputEnvelope */;
                  connect?: any /* circular reference to UserCommentWhereUniqueInput */;
                };
                profiles_created?: {
                  create?:
                    | any /* circular reference to UserProfileCreateWithoutCreated_by_profileInput */
                    | any /* circular reference to UserProfileUncheckedCreateWithoutCreated_by_profileInput */;
                  connectOrCreate?: any /* circular reference to UserProfileCreateOrConnectWithoutCreated_by_profileInput */;
                  createMany?: any /* circular reference to UserProfileCreateManyCreated_by_profileInputEnvelope */;
                  connect?: any /* circular reference to UserProfileWhereUniqueInput */;
                };
                threads_as_primary_participant?: {
                  create?:
                    | any /* circular reference to DiscussionThreadCreateWithoutParticipant_oneInput */
                    | any /* circular reference to DiscussionThreadUncheckedCreateWithoutParticipant_oneInput */;
                  connectOrCreate?: any /* circular reference to DiscussionThreadCreateOrConnectWithoutParticipant_oneInput */;
                  createMany?: any /* circular reference to DiscussionThreadCreateManyParticipant_oneInputEnvelope */;
                  connect?: any /* circular reference to DiscussionThreadWhereUniqueInput */;
                };
                threads_as_secondary_participant?: {
                  create?:
                    | any /* circular reference to DiscussionThreadCreateWithoutParticipant_twoInput */
                    | any /* circular reference to DiscussionThreadUncheckedCreateWithoutParticipant_twoInput */;
                  connectOrCreate?: any /* circular reference to DiscussionThreadCreateOrConnectWithoutParticipant_twoInput */;
                  createMany?: any /* circular reference to DiscussionThreadCreateManyParticipant_twoInputEnvelope */;
                  connect?: any /* circular reference to DiscussionThreadWhereUniqueInput */;
                };
                sent_messages?: {
                  create?:
                    | any /* circular reference to ThreadMessageCreateWithoutSenderInput */
                    | any /* circular reference to ThreadMessageUncheckedCreateWithoutSenderInput */;
                  connectOrCreate?: any /* circular reference to ThreadMessageCreateOrConnectWithoutSenderInput */;
                  createMany?: any /* circular reference to ThreadMessageCreateManySenderInputEnvelope */;
                  connect?: any /* circular reference to ThreadMessageWhereUniqueInput */;
                };
                org_memberships?: {
                  create?:
                    | any /* circular reference to OrgMembershipCreateWithoutUser_profileInput */
                    | any /* circular reference to OrgMembershipUncheckedCreateWithoutUser_profileInput */;
                  connectOrCreate?: any /* circular reference to OrgMembershipCreateOrConnectWithoutUser_profileInput */;
                  createMany?: any /* circular reference to OrgMembershipCreateManyUser_profileInputEnvelope */;
                  connect?: any /* circular reference to OrgMembershipWhereUniqueInput */;
                };
              };
          connectOrCreate?: {
            where: any /* circular reference to UserProfileWhereUniqueInput */;
            create:
              | any /* circular reference to UserProfileCreateWithoutPaymentsInput */
              | any /* circular reference to UserProfileUncheckedCreateWithoutPaymentsInput */;
          };
          connect?: any /* circular reference to UserProfileWhereUniqueInput */;
        };
      }
    | {
        payment_id?: string;
        payer_id: string;
        amount: Decimal;
        paid_at?: Date;
        status?: "DRAFT" | "REVIEW" | "PUBLISHED" | "ARCHIVED";
        reference_note?: any;
      };
}

import { z } from "zod";

export const OnePaymentCreateArgsSchema = z.object({
  data: z.any(),
});
