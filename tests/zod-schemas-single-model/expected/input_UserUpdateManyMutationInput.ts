// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserUpdateManyMutationInput {
  name?: any;
  email?: any;
}

import { z } from "zod";

export const UserUpdateManyMutationInputSchema = z.object({
  name: z.string().optional(),
  email: z.string().optional(),
});
