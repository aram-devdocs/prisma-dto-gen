// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserProfileUncheckedUpdateManyWithoutCreated_by_profileNestedInput {
  create?: any;
  connectOrCreate?: any;
  upsert?: any;
  createMany?: any;
  set?: any;
  disconnect?: any;
  delete?: any;
  connect?: any;
  update?: any;
  updateMany?: any;
  deleteMany?: any;
}

import { z } from "zod";

export const UserProfileUncheckedUpdateManyWithoutCreated_by_profileNestedInputSchema = z.object({
  create: z.any().optional(),
  connectOrCreate: z.any().optional(),
  upsert: z.any().optional(),
  createMany: z.any().optional(),
  set: z.any().optional(),
  disconnect: z.any().optional(),
  delete: z.any().optional(),
  connect: z.any().optional(),
  update: z.any().optional(),
  updateMany: z.any().optional(),
  deleteMany: z.any().optional(),
});
