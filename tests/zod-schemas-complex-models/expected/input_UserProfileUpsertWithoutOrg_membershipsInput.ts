// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserProfileUpsertWithoutOrg_membershipsInput {
  update: any;
  create: any;
  where?: any;
}

import { z } from "zod";

export const UserProfileUpsertWithoutOrg_membershipsInputSchema = z.object({
  update: z.any(),
  create: z.any(),
  where: z.any().optional(),
});
