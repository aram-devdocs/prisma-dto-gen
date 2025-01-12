// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserNotificationCreateManyUser_profileInput {
  notification_id?: string;
  sent_timestamp?: Date;
  read_timestamp?: any;
  message: string;
}

import { z } from "zod";

export const UserNotificationCreateManyUser_profileInputSchema = z.object({
  notification_id: z.string().optional(),
  sent_timestamp: z.date().optional(),
  read_timestamp: z.date().nullable().optional(),
  message: z.string(),
});
