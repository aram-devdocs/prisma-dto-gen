// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserNotificationOrderByWithRelationInput {
  notification_id: any;
  recipient_profile_id: any;
  sent_timestamp: any;
  read_timestamp: any;
  message: any;
  notification_refs: any;
  user_profile: any;
}

import { z } from "zod";

export const UserNotificationOrderByWithRelationInputSchema = z.object({
  notification_id: z.any(),
  recipient_profile_id: z.any(),
  sent_timestamp: z.any(),
  read_timestamp: z.any(),
  message: z.any(),
  notification_refs: z.any(),
  user_profile: z.any(),
});
