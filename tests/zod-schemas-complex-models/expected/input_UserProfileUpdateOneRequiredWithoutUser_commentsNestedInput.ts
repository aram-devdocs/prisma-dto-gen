// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserProfileUpdateOneRequiredWithoutUser_commentsNestedInput {
  create: any;
  connectOrCreate: any;
  upsert: any;
  connect: any;
  update: any;
}

import { z } from "zod";

export const UserProfileUpdateOneRequiredWithoutUser_commentsNestedInputSchema = z.object({
  create: z.any(),
  connectOrCreate: z.any(),
  upsert: z.any(),
  connect: z.any(),
  update: z.any(),
});
