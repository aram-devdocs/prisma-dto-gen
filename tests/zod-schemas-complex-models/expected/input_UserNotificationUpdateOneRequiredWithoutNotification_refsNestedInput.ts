// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserNotificationUpdateOneRequiredWithoutNotification_refsNestedInput {
  create?: any;
  connectOrCreate?: any;
  upsert?: any;
  connect?: any;
  update?: any;
}

import { z } from "zod";

export const UserNotificationUpdateOneRequiredWithoutNotification_refsNestedInputSchema = z.object({
  create: z.any().optional(),
  connectOrCreate: z.any().optional(),
  upsert: z.any().optional(),
  connect: z.any().optional(),
  update: z.any().optional(),
});
