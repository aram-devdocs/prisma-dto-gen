// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserCreateManyInput {
  id?: number;
  name: string;
  email: string;
}

import { z } from "zod";

export const UserCreateManyInputSchema = z.object({
  id: z.number().optional(),
  name: z.string(),
  email: z.string(),
});
