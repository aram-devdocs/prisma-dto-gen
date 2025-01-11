// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserNotificationUpdateInput {
  notification_id: any;
  sent_timestamp: any;
  read_timestamp?: any | null;
  message: any;
  notification_refs: any;
  user_profile: any;
}

import { z } from "zod";

export const UserNotificationUpdateInputSchema = z.object({
  notification_id: z.string(),
  sent_timestamp: z.date(),
  read_timestamp: z.date().nullable(),
  message: z.string(),
  notification_refs: z.any(),
  user_profile: z.any(),
});
