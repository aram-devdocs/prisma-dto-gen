// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserSumOrderByAggregateInput {
  id?: any;
  age?: any;
}

import { z } from "zod";

export const UserSumOrderByAggregateInputSchema = z.object({
  id: z.any().optional(),
  age: z.any().optional(),
});
