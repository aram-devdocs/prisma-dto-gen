// Auto-generated by prisma-dto-gen (refactored inline)

export interface AggregateUserCommentOutput {
  _count?: any;
  _min?: any;
  _max?: any;
}

import { z } from "zod";

export const AggregateUserCommentOutputSchema = z.object({
  _count: z.any().optional(),
  _min: z.any().optional(),
  _max: z.any().optional(),
});
