// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserMinOrderByAggregateInput {
  id?: any;
  name?: any;
  email?: any;
  age?: any;
  isFoo?: any;
  password?: any;
  createdAt?: any;
  updatedAt?: any;
}

import { z } from "zod";

export const UserMinOrderByAggregateInputSchema = z.object({
  id: z.any().optional(),
  name: z.any().optional(),
  email: z.any().optional(),
  age: z.any().optional(),
  isFoo: z.any().optional(),
  password: z.any().optional(),
  createdAt: z.any().optional(),
  updatedAt: z.any().optional(),
});
