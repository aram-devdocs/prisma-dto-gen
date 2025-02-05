// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserUncheckedCreateInput {
  id?: number;
  name: string;
  email: string;
}

import { z } from "zod";

export const UserUncheckedCreateInputSchema = z.object({
  id: z.number().optional(),
  name: z.string(),
  email: z.string(),
});
