// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserNotificationScalarWhereInput {
  AND: any;
  OR: any;
  NOT: any;
  notification_id: any;
  recipient_profile_id: any;
  sent_timestamp: any;
  read_timestamp?: any | null;
  message: any;
}

import { z } from "zod";

export const UserNotificationScalarWhereInputSchema = z.object({
  AND: z.any(),
  OR: z.array(z.any()),
  NOT: z.any(),
  notification_id: z.any(),
  recipient_profile_id: z.any(),
  sent_timestamp: z.any(),
  read_timestamp: z.any().nullable(),
  message: z.any(),
});