// Auto-generated by prisma-dto-gen (refactored inline)

export interface OrganizationUpsertWithoutMembersInput {
  update: any;
  create: any;
  where?: any;
}

import { z } from "zod";

export const OrganizationUpsertWithoutMembersInputSchema = z.object({
  update: z.any(),
  create: z.any(),
  where: z.any().optional(),
});
