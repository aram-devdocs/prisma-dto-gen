// Auto-generated by prisma-dto-gen (refactored inline)

export interface OrganizationUpdateToOneWithWhereWithoutMembersInput {
  where?: any;
  data: any;
}

import { z } from "zod";

export const OrganizationUpdateToOneWithWhereWithoutMembersInputSchema = z.object({
  where: z.any().optional(),
  data: z.any(),
});
