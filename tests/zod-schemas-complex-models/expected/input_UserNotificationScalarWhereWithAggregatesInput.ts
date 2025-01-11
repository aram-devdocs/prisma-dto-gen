// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserNotificationScalarWhereWithAggregatesInput {
  AND?: any;
  OR?: any;
  NOT?: any;
  notification_id?: any;
  recipient_profile_id?: any;
  sent_timestamp?: any;
  read_timestamp?: any;
  message?: any;
}

import { z } from "zod";

export const UserNotificationScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.any().optional(),
  OR: z.array(z.any()).optional(),
  NOT: z.any().optional(),
  notification_id: z.any().optional(),
  recipient_profile_id: z.any().optional(),
  sent_timestamp: z.any().optional(),
  read_timestamp: z.any().nullable().optional(),
  message: z.any().optional(),
});
