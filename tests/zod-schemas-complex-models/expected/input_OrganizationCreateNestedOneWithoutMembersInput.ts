// Auto-generated by prisma-dto-gen (refactored inline)

export interface OrganizationCreateNestedOneWithoutMembersInput {
  create: any;
  connectOrCreate: any;
  connect: any;
}

import { z } from "zod";

export const OrganizationCreateNestedOneWithoutMembersInputSchema = z.object({
  create: z.any(),
  connectOrCreate: z.any(),
  connect: z.any(),
});