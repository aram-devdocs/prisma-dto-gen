// Auto-generated by prisma-dto-gen (refactored inline)

export interface OrganizationUpdateOneRequiredWithoutMembersNestedInput {
  create: any;
  connectOrCreate: any;
  upsert: any;
  connect: any;
  update: any;
}

import { z } from "zod";

export const OrganizationUpdateOneRequiredWithoutMembersNestedInputSchema = z.object({
  create: z.any(),
  connectOrCreate: z.any(),
  upsert: z.any(),
  connect: z.any(),
  update: z.any(),
});
