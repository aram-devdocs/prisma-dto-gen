// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserProfileUpsertWithoutPaymentsInput {
  update: any;
  create: any;
  where: any;
}

import { z } from "zod";

export const UserProfileUpsertWithoutPaymentsInputSchema = z.object({
  update: z.any(),
  create: z.any(),
  where: z.any(),
});
