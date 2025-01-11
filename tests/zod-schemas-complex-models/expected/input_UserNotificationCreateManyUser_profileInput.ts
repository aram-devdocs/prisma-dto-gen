// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserNotificationCreateManyUser_profileInput {
  notification_id: string;
  sent_timestamp: Date;
  read_timestamp?: any | null;
  message: string;
}

import { z } from "zod";

export const UserNotificationCreateManyUser_profileInputSchema = z.object({
  notification_id: z.string(),
  sent_timestamp: z.date(),
  read_timestamp: z.date().nullable(),
  message: z.string(),
});
