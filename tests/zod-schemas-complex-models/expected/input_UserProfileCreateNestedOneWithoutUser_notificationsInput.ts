// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserProfileCreateNestedOneWithoutUser_notificationsInput {
  create?: any;
  connectOrCreate?: any;
  connect?: any;
}

import { z } from "zod";

export const UserProfileCreateNestedOneWithoutUser_notificationsInputSchema = z.object({
  create: z.any().optional(),
  connectOrCreate: z.any().optional(),
  connect: z.any().optional(),
});
