// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserCommentCreateNestedManyWithoutUser_documentInput {
  create: any;
  connectOrCreate: any;
  createMany: any;
  connect: any;
}

import { z } from "zod";

export const UserCommentCreateNestedManyWithoutUser_documentInputSchema = z.object({
  create: z.any(),
  connectOrCreate: z.any(),
  createMany: z.any(),
  connect: z.any(),
});