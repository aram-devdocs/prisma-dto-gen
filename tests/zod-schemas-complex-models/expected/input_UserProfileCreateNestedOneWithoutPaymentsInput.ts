// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserProfileCreateNestedOneWithoutPaymentsInput {
  create?: any;
  connectOrCreate?: any;
  connect?: any;
}

import { z } from "zod";

export const UserProfileCreateNestedOneWithoutPaymentsInputSchema = z.object({
  create: z.any().optional(),
  connectOrCreate: z.any().optional(),
  connect: z.any().optional(),
});
