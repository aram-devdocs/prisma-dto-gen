// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserProfileCreateOrConnectWithoutOrg_membershipsInput {
  where: any;
  create: any;
}

import { z } from "zod";

export const UserProfileCreateOrConnectWithoutOrg_membershipsInputSchema = z.object({
  where: z.any(),
  create: z.any(),
});