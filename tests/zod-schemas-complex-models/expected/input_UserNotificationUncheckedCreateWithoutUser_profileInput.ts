// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserNotificationUncheckedCreateWithoutUser_profileInput {
  notification_id: string;
  sent_timestamp: Date;
  read_timestamp?: any;
  message: string;
  notification_refs: any;
}

import { z } from "zod";

export const UserNotificationUncheckedCreateWithoutUser_profileInputSchema = z.object({
  notification_id: z.string(),
  sent_timestamp: z.date(),
  read_timestamp: z.date().optional(),
  message: z.string(),
  notification_refs: z.any(),
});
