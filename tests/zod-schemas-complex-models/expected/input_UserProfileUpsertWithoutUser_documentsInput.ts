// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserProfileUpsertWithoutUser_documentsInput {
  update: any;
  create: any;
  where: any;
}

import { z } from "zod";

export const UserProfileUpsertWithoutUser_documentsInputSchema = z.object({
  update: z.any(),
  create: z.any(),
  where: z.any(),
});