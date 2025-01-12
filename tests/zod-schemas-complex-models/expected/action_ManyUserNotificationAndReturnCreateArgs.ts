// Auto-generated by prisma-dto-gen (refactored inline)

export interface ManyUserNotificationAndReturnCreateArgs {
  data:
    | {
        notification_id?: string;
        recipient_profile_id: string;
        sent_timestamp?: Date;
        read_timestamp?: any;
        message: string;
      }
    | any /* circular reference to UserNotificationCreateManyInput */;
  skipDuplicates?: boolean;
}

import { z } from "zod";

export const ManyUserNotificationAndReturnCreateArgsSchema = z.object({
  data: z.any(),
  skipDuplicates: z.boolean().optional(),
});
