// Auto-generated by prisma-dto-gen (refactored inline)

export interface AggregateThreadMessageOutput {
  _count?: any;
  _min?: any;
  _max?: any;
}

import { z } from "zod";

export const AggregateThreadMessageOutputSchema = z.object({
  _count: z.any().optional(),
  _min: z.any().optional(),
  _max: z.any().optional(),
});
