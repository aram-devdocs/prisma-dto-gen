// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserNotificationScalarWhereInput {
  AND?:
    | {
        AND?: any /* circular reference to UserNotificationScalarWhereInput */;
        OR?: any /* circular reference to UserNotificationScalarWhereInput */;
        NOT?: any /* circular reference to UserNotificationScalarWhereInput */;
        notification_id?: any;
        recipient_profile_id?: any;
        sent_timestamp?: any;
        read_timestamp?: any;
        message?: any;
      }
    | any /* circular reference to UserNotificationScalarWhereInput */;
  OR?: any /* circular reference to UserNotificationScalarWhereInput */;
  NOT?: any /* circular reference to UserNotificationScalarWhereInput */;
  notification_id?: any;
  recipient_profile_id?: any;
  sent_timestamp?: any;
  read_timestamp?: any;
  message?: any;
}

import { z } from "zod";

export const UserNotificationScalarWhereInputSchema = z.object({
  AND: z.any().optional(),
  OR: z.array(z.any()).optional(),
  NOT: z.any().optional(),
  notification_id: z.any().optional(),
  recipient_profile_id: z.any().optional(),
  sent_timestamp: z.any().optional(),
  read_timestamp: z.any().nullable().optional(),
  message: z.any().optional(),
});
