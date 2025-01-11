// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserOutput {
  id: number;
  name: string;
  email: string;
}

import { z } from "zod";

export const UserOutputSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
});
