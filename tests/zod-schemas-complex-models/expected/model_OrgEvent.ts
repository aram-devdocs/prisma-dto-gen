// Auto-generated by prisma-dto-gen (refactored inline)

type Decimal = { valueOf(): string };

/**
 * @schema OrgEvent
 */

export interface OrgEvent {
  org_event_id: string;
  organization_id: string;
  event_name: string;
  start_time: Date;
  end_time?: Date | null;
  location?: string | null;
  organization: {
    organization_id: string;
    name: string;
    description?: string | null;
    created_on: Date;
    updated_on?: Date | null;
    is_active?: boolean | null;
    events: any /* circular reference to OrgEvent */[];
    members: {
      membership_id: string;
      organization_id: string;
      profile_id: string;
      joined_on: Date;
      is_active?: boolean | null;
      organization: any /* circular reference to Organization */;
      user_profile: {
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
        org_memberships: any /* circular reference to OrgMembership */[];
        payments: {
          payment_id: string;
          payer_id: string;
          amount: Decimal;
          paid_at: Date;
          status: "DRAFT" | "REVIEW" | "PUBLISHED" | "ARCHIVED";
          reference_note?: string | null;
          payer: any /* circular reference to UserProfile */;
        }[];
      };
    }[];
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
}

import { z } from "zod";

export const OrgEventSchema = z.object({
  org_event_id: z.string(),
  organization_id: z.string(),
  event_name: z.string(),
  start_time: z.date(),
  end_time: z.date().nullable(),
  location: z.string().nullable(),
  organization: z.any(),
});
