// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserNotificationUpsertWithoutNotification_refsInput {
  update: any;
  create: any;
  where?: any;
}

import { z } from "zod";

export const UserNotificationUpsertWithoutNotification_refsInputSchema = z.object({
  update: z.any(),
  create: z.any(),
  where: z.any().optional(),
});
