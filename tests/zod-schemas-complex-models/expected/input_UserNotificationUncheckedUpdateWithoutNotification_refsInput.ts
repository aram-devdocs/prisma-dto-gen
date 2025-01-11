// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserNotificationUncheckedUpdateWithoutNotification_refsInput {
  notification_id: any;
  recipient_profile_id: any;
  sent_timestamp: any;
  read_timestamp?: any | null;
  message: any;
}

import { z } from "zod";

export const UserNotificationUncheckedUpdateWithoutNotification_refsInputSchema = z.object({
  notification_id: z.string(),
  recipient_profile_id: z.string(),
  sent_timestamp: z.date(),
  read_timestamp: z.date().nullable(),
  message: z.string(),
});
