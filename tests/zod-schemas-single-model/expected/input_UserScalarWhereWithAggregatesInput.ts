// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserScalarWhereWithAggregatesInput {
  AND?: any;
  OR?: any;
  NOT?: any;
  id?: any;
  name?: any;
  email?: any;
}

import { z } from "zod";

export const UserScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.any().optional(),
  OR: z.array(z.any()).optional(),
  NOT: z.any().optional(),
  id: z.any().optional(),
  name: z.any().optional(),
  email: z.any().optional(),
});
