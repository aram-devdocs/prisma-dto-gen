// Auto-generated by prisma-dto-gen (refactored inline)

export interface OrgEventCreateNestedManyWithoutOrganizationInput {
  create?: any;
  connectOrCreate?: any;
  createMany?: any;
  connect?: any;
}

import { z } from "zod";

export const OrgEventCreateNestedManyWithoutOrganizationInputSchema = z.object({
  create: z.any().optional(),
  connectOrCreate: z.any().optional(),
  createMany: z.any().optional(),
  connect: z.any().optional(),
});
