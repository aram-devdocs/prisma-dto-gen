// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserNotificationUncheckedUpdateManyWithoutUser_profileInput {
  notification_id?: any;
  sent_timestamp?: any;
  read_timestamp?: any;
  message?: any;
}

import { z } from "zod";

export const UserNotificationUncheckedUpdateManyWithoutUser_profileInputSchema = z.object({
  notification_id: z.string().optional(),
  sent_timestamp: z.date().optional(),
  read_timestamp: z.date().nullable().optional(),
  message: z.string().optional(),
});
