// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserNotificationMinAggregateOutputTypeOutput {
  notification_id?: string | null;
  recipient_profile_id?: string | null;
  sent_timestamp?: Date | null;
  read_timestamp?: Date | null;
  message?: string | null;
}

import { z } from "zod";

export const UserNotificationMinAggregateOutputTypeOutputSchema = z.object({
  notification_id: z.string().nullable(),
  recipient_profile_id: z.string().nullable(),
  sent_timestamp: z.date().nullable(),
  read_timestamp: z.date().nullable(),
  message: z.string().nullable(),
});