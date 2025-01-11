// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserNotificationUpdateManyMutationInput {
  notification_id: any;
  sent_timestamp: any;
  read_timestamp?: any | null;
  message: any;
}

import { z } from "zod";

export const UserNotificationUpdateManyMutationInputSchema = z.object({
  notification_id: z.string(),
  sent_timestamp: z.date(),
  read_timestamp: z.date().nullable(),
  message: z.string(),
});