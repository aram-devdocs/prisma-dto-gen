// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserProfileUpdateToOneWithWhereWithoutOrg_membershipsInput {
  where?: any;
  data: any;
}

import { z } from "zod";

export const UserProfileUpdateToOneWithWhereWithoutOrg_membershipsInputSchema = z.object({
  where: z.any().optional(),
  data: z.any(),
});
