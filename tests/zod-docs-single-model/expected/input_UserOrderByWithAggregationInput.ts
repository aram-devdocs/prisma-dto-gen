// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserOrderByWithAggregationInput {
  id?: any;
  name?: any;
  email?: any;
  age?: any;
  isFoo?: any;
  password?: any;
  createdAt?: any;
  updatedAt?: any;
  _count?: any;
  _avg?: any;
  _max?: any;
  _min?: any;
  _sum?: any;
}

import { z } from "zod";

export const UserOrderByWithAggregationInputSchema = z.object({
  id: z.any().optional(),
  name: z.any().optional(),
  email: z.any().optional(),
  age: z.any().optional(),
  isFoo: z.any().optional(),
  password: z.any().optional(),
  createdAt: z.any().optional(),
  updatedAt: z.any().optional(),
  _count: z.any().optional(),
  _avg: z.any().optional(),
  _max: z.any().optional(),
  _min: z.any().optional(),
  _sum: z.any().optional(),
});
