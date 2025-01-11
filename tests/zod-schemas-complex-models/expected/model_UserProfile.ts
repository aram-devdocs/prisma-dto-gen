// Auto-generated by prisma-dto-gen (refactored inline)

type Decimal = { valueOf(): string };

export interface UserProfile {
  profile_id: string;
  created_timestamp: Date;
  updated_timestamp?: Date | null;
  deactivated?: boolean | null;
  full_name: string;
  email_address?: string | null;
  phone_number?: string | null;
  password_hash?: string | null;
  account_level?: "BASIC" | "PREMIUM" | "ADMIN" | null;
  user_documents: {
    document_id: string;
    owner_profile_id: string;
    title: string;
    content: string;
    status: "DRAFT" | "REVIEW" | "PUBLISHED" | "ARCHIVED";
    created_at: Date;
    updated_at?: Date | null;
    archived?: boolean | null;
    user_profile: any /* circular reference to UserProfile */;
    comments: {
      comment_id: string;
      document_id: string;
      commenter_id: string;
      text: string;
      created_at: Date;
      edited_at?: Date | null;
      is_deleted?: boolean | null;
      user_document: any /* circular reference to UserDocument */;
      user_profile: any /* circular reference to UserProfile */;
    }[];
  }[];
  user_notifications: {
    notification_id: string;
    recipient_profile_id: string;
    sent_timestamp: Date;
    read_timestamp?: Date | null;
    message: string;
    notification_refs: {
      notification_reference_id: string;
      notification_id: string;
      referenced_entity_id: string;
      status: "DRAFT" | "REVIEW" | "PUBLISHED" | "ARCHIVED";
      archived?: boolean | null;
      notification: any /* circular reference to UserNotification */;
    }[];
    user_profile: any /* circular reference to UserProfile */;
  }[];
  user_accounts: {
    account_id: string;
    owner_profile_id: string;
    name: string;
    created_at: Date;
    modified_at?: Date | null;
    is_active: boolean;
    user_profile: any /* circular reference to UserProfile */;
  }[];
  user_two_step_codes: {
    verification_id: string;
    profile_id: string;
    code?: string | null;
    is_verified: boolean;
    created_at: Date;
    verification_type: "EMAIL" | "SMS" | "PUSH";
    user_profile: any /* circular reference to UserProfile */;
  }[];
  user_comments: any /* circular reference to UserComment */[];
  created_by_profile?: any /* circular reference to UserProfile */ | null;
  created_by_id?: string | null;
  profiles_created: any /* circular reference to UserProfile */[];
  threads_as_primary_participant: {
    thread_id: string;
    primary_participant: string;
    secondary_participant?: string | null;
    created_on: Date;
    closed_on?: Date | null;
    is_flagged?: boolean | null;
    flagged_reason?: string | null;
    participant_one: any /* circular reference to UserProfile */;
    participant_two?: any /* circular reference to UserProfile */ | null;
    messages: {
      message_id: string;
      thread_id: string;
      sender_id: string;
      content: string;
      sent_at: Date;
      updated_at?: Date | null;
      is_archived?: boolean | null;
      discussion_thread: any /* circular reference to DiscussionThread */;
      sender: any /* circular reference to UserProfile */;
    }[];
  }[];
  threads_as_secondary_participant: any /* circular reference to DiscussionThread */[];
  sent_messages: any /* circular reference to ThreadMessage */[];
  org_memberships: {
    membership_id: string;
    organization_id: string;
    profile_id: string;
    joined_on: Date;
    is_active?: boolean | null;
    organization: {
      organization_id: string;
      name: string;
      description?: string | null;
      created_on: Date;
      updated_on?: Date | null;
      is_active?: boolean | null;
      events: {
        org_event_id: string;
        organization_id: string;
        event_name: string;
        start_time: Date;
        end_time?: Date | null;
        location?: string | null;
        organization: any /* circular reference to Organization */;
      }[];
      members: any /* circular reference to OrgMembership */[];
      records: {
        record_id: string;
        organization_id: string;
        title: string;
        details?: string | null;
        created_on: Date;
        updated_on?: Date | null;
        organization: any /* circular reference to Organization */;
      }[];
    };
    user_profile: any /* circular reference to UserProfile */;
  }[];
  payments: {
    payment_id: string;
    payer_id: string;
    amount: Decimal;
    paid_at: Date;
    status: "DRAFT" | "REVIEW" | "PUBLISHED" | "ARCHIVED";
    reference_note?: string | null;
    payer: any /* circular reference to UserProfile */;
  }[];
}

import { z } from "zod";

export const UserProfileSchema = z.object({
  profile_id: z.string(),
  created_timestamp: z.date(),
  updated_timestamp: z.date().nullable(),
  deactivated: z.boolean().nullable(),
  full_name: z.string(),
  email_address: z.string().nullable(),
  phone_number: z.string().nullable(),
  password_hash: z.string().nullable(),
  account_level: z.enum(["BASIC", "PREMIUM", "ADMIN"]).nullable(),
  user_documents: z.array(
    z.object({
      document_id: z.string(),
      owner_profile_id: z.string(),
      title: z.string(),
      content: z.string(),
      status: z.enum(["DRAFT", "REVIEW", "PUBLISHED", "ARCHIVED"]),
      created_at: z.date(),
      updated_at: z.date().nullable(),
      archived: z.boolean().nullable(),
      user_profile: z.any() /* circular reference to UserProfileSchema */,
      comments: z.array(
        z.object({
          comment_id: z.string(),
          document_id: z.string(),
          commenter_id: z.string(),
          text: z.string(),
          created_at: z.date(),
          edited_at: z.date().nullable(),
          is_deleted: z.boolean().nullable(),
          user_document: z.any() /* circular reference to UserDocumentSchema */,
          user_profile: z.any() /* circular reference to UserProfileSchema */,
        }),
      ),
    }),
  ),
  user_notifications: z.array(
    z.object({
      notification_id: z.string(),
      recipient_profile_id: z.string(),
      sent_timestamp: z.date(),
      read_timestamp: z.date().nullable(),
      message: z.string(),
      notification_refs: z.array(
        z.object({
          notification_reference_id: z.string(),
          notification_id: z.string(),
          referenced_entity_id: z.string(),
          status: z.enum(["DRAFT", "REVIEW", "PUBLISHED", "ARCHIVED"]),
          archived: z.boolean().nullable(),
          notification: z.any() /* circular reference to UserNotificationSchema */,
        }),
      ),
      user_profile: z.any() /* circular reference to UserProfileSchema */,
    }),
  ),
  user_accounts: z.array(
    z.object({
      account_id: z.string(),
      owner_profile_id: z.string(),
      name: z.string(),
      created_at: z.date(),
      modified_at: z.date().nullable(),
      is_active: z.boolean(),
      user_profile: z.any() /* circular reference to UserProfileSchema */,
    }),
  ),
  user_two_step_codes: z.array(
    z.object({
      verification_id: z.string(),
      profile_id: z.string(),
      code: z.string().nullable(),
      is_verified: z.boolean(),
      created_at: z.date(),
      verification_type: z.enum(["EMAIL", "SMS", "PUSH"]),
      user_profile: z.any() /* circular reference to UserProfileSchema */,
    }),
  ),
  user_comments: z.array(z.any() /* circular reference to UserCommentSchema */),
  created_by_profile: z
    .any() /* circular reference to UserProfileSchema */
    .nullable(),
  created_by_id: z.string().nullable(),
  profiles_created: z.array(z.any() /* circular reference to UserProfileSchema */),
  threads_as_primary_participant: z.array(
    z.object({
      thread_id: z.string(),
      primary_participant: z.string(),
      secondary_participant: z.string().nullable(),
      created_on: z.date(),
      closed_on: z.date().nullable(),
      is_flagged: z.boolean().nullable(),
      flagged_reason: z.string().nullable(),
      participant_one: z.any() /* circular reference to UserProfileSchema */,
      participant_two: z
        .any() /* circular reference to UserProfileSchema */
        .nullable(),
      messages: z.array(
        z.object({
          message_id: z.string(),
          thread_id: z.string(),
          sender_id: z.string(),
          content: z.string(),
          sent_at: z.date(),
          updated_at: z.date().nullable(),
          is_archived: z.boolean().nullable(),
          discussion_thread: z.any() /* circular reference to DiscussionThreadSchema */,
          sender: z.any() /* circular reference to UserProfileSchema */,
        }),
      ),
    }),
  ),
  threads_as_secondary_participant: z.array(
    z.any() /* circular reference to DiscussionThreadSchema */,
  ),
  sent_messages: z.array(z.any() /* circular reference to ThreadMessageSchema */),
  org_memberships: z.array(
    z.object({
      membership_id: z.string(),
      organization_id: z.string(),
      profile_id: z.string(),
      joined_on: z.date(),
      is_active: z.boolean().nullable(),
      organization: z.object({
        organization_id: z.string(),
        name: z.string(),
        description: z.string().nullable(),
        created_on: z.date(),
        updated_on: z.date().nullable(),
        is_active: z.boolean().nullable(),
        events: z.array(
          z.object({
            org_event_id: z.string(),
            organization_id: z.string(),
            event_name: z.string(),
            start_time: z.date(),
            end_time: z.date().nullable(),
            location: z.string().nullable(),
            organization: z.any() /* circular reference to OrganizationSchema */,
          }),
        ),
        members: z.array(z.any() /* circular reference to OrgMembershipSchema */),
        records: z.array(
          z.object({
            record_id: z.string(),
            organization_id: z.string(),
            title: z.string(),
            details: z.string().nullable(),
            created_on: z.date(),
            updated_on: z.date().nullable(),
            organization: z.any() /* circular reference to OrganizationSchema */,
          }),
        ),
      }),
      user_profile: z.any() /* circular reference to UserProfileSchema */,
    }),
  ),
  payments: z.array(
    z.object({
      payment_id: z.string(),
      payer_id: z.string(),
      amount: z.any(),
      paid_at: z.date(),
      status: z.enum(["DRAFT", "REVIEW", "PUBLISHED", "ARCHIVED"]),
      reference_note: z.string().nullable(),
      payer: z.any() /* circular reference to UserProfileSchema */,
    }),
  ),
});
