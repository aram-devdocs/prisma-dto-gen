// Auto-generated by prisma-dto-gen (refactored inline)

export interface AggregateUserOutput {
  _count?: any;
  _avg?: any;
  _sum?: any;
  _min?: any;
  _max?: any;
}

import { z } from "zod";

export const AggregateUserOutputSchema = z.object({
  _count: z.any().optional(),
  _avg: z.any().optional(),
  _sum: z.any().optional(),
  _min: z.any().optional(),
  _max: z.any().optional(),
});
