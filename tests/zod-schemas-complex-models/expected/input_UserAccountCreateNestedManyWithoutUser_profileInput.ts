// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserAccountCreateNestedManyWithoutUser_profileInput {
  create: any;
  connectOrCreate: any;
  createMany: any;
  connect: any;
}

import { z } from "zod";

export const UserAccountCreateNestedManyWithoutUser_profileInputSchema = z.object({
  create: z.any(),
  connectOrCreate: z.any(),
  createMany: z.any(),
  connect: z.any(),
});
