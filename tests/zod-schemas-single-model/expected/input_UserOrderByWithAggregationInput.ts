// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserOrderByWithAggregationInput {
  id: any;
  name: any;
  email: any;
  _count: any;
  _avg: any;
  _max: any;
  _min: any;
  _sum: any;
}

import { z } from "zod";

export const UserOrderByWithAggregationInputSchema = z.object({
  id: z.any(),
  name: z.any(),
  email: z.any(),
  _count: z.any(),
  _avg: z.any(),
  _max: z.any(),
  _min: z.any(),
  _sum: z.any(),
});
