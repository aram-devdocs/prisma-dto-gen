// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserProfileUpdateOneRequiredWithoutOrg_membershipsNestedInput {
  create: any;
  connectOrCreate: any;
  upsert: any;
  connect: any;
  update: any;
}

import { z } from "zod";

export const UserProfileUpdateOneRequiredWithoutOrg_membershipsNestedInputSchema = z.object({
  create: z.any(),
  connectOrCreate: z.any(),
  upsert: z.any(),
  connect: z.any(),
  update: z.any(),
});
