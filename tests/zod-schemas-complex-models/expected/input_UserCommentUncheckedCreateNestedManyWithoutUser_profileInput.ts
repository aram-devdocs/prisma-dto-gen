// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserCommentUncheckedCreateNestedManyWithoutUser_profileInput {
  create?: any;
  connectOrCreate?: any;
  createMany?: any;
  connect?: any;
}

import { z } from "zod";

export const UserCommentUncheckedCreateNestedManyWithoutUser_profileInputSchema = z.object({
  create: z.any().optional(),
  connectOrCreate: z.any().optional(),
  createMany: z.any().optional(),
  connect: z.any().optional(),
});
