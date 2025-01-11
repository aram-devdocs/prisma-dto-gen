// Auto-generated by prisma-dto-gen (refactored inline)

type Decimal = { valueOf(): string };

export interface UserDocument {
  document_id: string;
  owner_profile_id: string;
  title: string;
  content: string;
  status: "DRAFT" | "REVIEW" | "PUBLISHED" | "ARCHIVED";
  created_at: Date;
  updated_at?: Date | null;
  archived?: boolean | null;
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
    user_documents: any /* circular reference to UserDocument */[];
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
    user_comments: {
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
  };
  comments: any /* circular reference to UserComment */[];
}

import { z } from "zod";

export const UserDocumentSchema = z.object({
  document_id: z.string(),
  owner_profile_id: z.string(),
  title: z.string(),
  content: z.string(),
  status: z.enum(["DRAFT", "REVIEW", "PUBLISHED", "ARCHIVED"]),
  created_at: z.date(),
  updated_at: z.date().nullable(),
  archived: z.boolean().nullable(),
  user_profile: z.any(),
  comments: z.array(z.any()),
});
