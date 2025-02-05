// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserNotificationUncheckedUpdateWithoutUser_profileInput {
  notification_id?: any;
  sent_timestamp?: any;
  read_timestamp?: any;
  message?: any;
  notification_refs?: any;
}

import { z } from "zod";

export const UserNotificationUncheckedUpdateWithoutUser_profileInputSchema = z.object({
  notification_id: z.string().optional(),
  sent_timestamp: z.date().optional(),
  read_timestamp: z.date().nullable().optional(),
  message: z.string().optional(),
  notification_refs: z.any().optional(),
});
