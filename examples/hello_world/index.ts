import express, { Request, Response } from "express";
import { Decimal } from "@prisma/client/runtime/library";

import {
  UserProfile,
  UserProfileCreateInput,
  UserProfileCreateInputSchema,
  UserProfileSchema,
  UserDocument,
  UserDocumentSchema,
  NotificationReference,
  NotificationReferenceSchema,
  ThreadMessage,
  ThreadMessageSchema,
  Payment,
  PaymentSchema,
  ChangeLog,
  ChangeLogSchema,
  UserNotification,
  UserNotificationSchema,
  OrgMembership,
} from "./types";

const app = express();
const PORT = 3000;
console.log("Starting server...");

app.get("/", (req: Request, res: Response) => {
  const mockUserCreateInput: UserProfileCreateInput = {
    full_name: "John Doe",
  };

  // Validate mockUserCreateInput
  const validationResult = UserProfileCreateInputSchema.safeParse(mockUserCreateInput);

  // Create mock data
  const mockChangeLog: ChangeLog = {
    change_log_id: "cl1",
    applied_at: new Date(),
    description: "Initial change",
  };

  // Update mockUserProfile with all required arrays
  const mockUserProfile: UserProfile = {
    profile_id: "up1",
    created_timestamp: new Date(),
    updated_timestamp: new Date(),
    deactivated: false,
    full_name: "John Doe",
    email_address: "john@example.com",
    phone_number: "+1234567890",
    password_hash: "hashed_password",
    account_level: "BASIC",
    created_by_id: null,
    created_by_profile: null,
    // Required arrays
    user_documents: [],
    user_notifications: [],
    user_accounts: [],
    user_two_step_codes: [],
    user_comments: [],
    profiles_created: [],
    threads_as_primary_participant: [],
    threads_as_secondary_participant: [],
    sent_messages: [],
    org_memberships: [],
    payments: [],
  };

  const mockUserDocument: UserDocument = {
    document_id: "ud1",
    owner_profile_id: "up1",
    title: "Test Document",
    content: "Test Content",
    status: "DRAFT",
    created_at: new Date(),
    updated_at: null,
    archived: false,
    comments: [],
    user_profile: mockUserProfile,
  };

  const mockNotificationRef: NotificationReference = {
    notification_reference_id: "nr1",
    notification_id: "n1",
    referenced_entity_id: "re1",
    status: "DRAFT",
    archived: false,
    notification: {
      notification_id: "n1",
      recipient_profile_id: "up1",
      sent_timestamp: new Date(),
      read_timestamp: null,
      message: "Test notification",
      notification_refs: [],
      user_profile: mockUserProfile,
    },
  };

  const mockThreadMessage: ThreadMessage = {
    message_id: "tm1",
    thread_id: "t1",
    sender_id: "up1",
    content: "Hello!",
    sent_at: new Date(),
    updated_at: null,
    is_archived: false,
    sender: mockUserProfile,
    discussion_thread: {
      thread_id: "t1",
      primary_participant: "up1",
      secondary_participant: null,
      created_on: new Date(),
      closed_on: null,
      is_flagged: false,
      flagged_reason: null,
      participant_one: mockUserProfile,
      participant_two: null,
      messages: [],
    },
  };

  const mockPayment: Payment = {
    payment_id: "p1",
    payer_id: "up1",
    amount: new Decimal(99.99),
    paid_at: new Date(),
    status: "DRAFT",
    reference_note: "Test payment",
    payer: mockUserProfile,
  };

  // Validate all mock objects
  const validationResults = {
    changeLog: ChangeLogSchema.safeParse(mockChangeLog),
    userProfile: UserProfileSchema.safeParse(mockUserProfile),
    userDocument: UserDocumentSchema.safeParse(mockUserDocument),
    notificationRef: NotificationReferenceSchema.safeParse(mockNotificationRef),
    threadMessage: ThreadMessageSchema.safeParse(mockThreadMessage),
    payment: PaymentSchema.safeParse(mockPayment),
  };

  // Return validation results
  res.json({
    message: "Schema validation results",
    results: Object.entries(validationResults).map(([key, result]) => ({
      model: key,
      isValid: result.success,
      ...(result.success ? {} : { errors: result.error.errors }),
    })),
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
