// Auto-generated by prisma-dto-gen (refactored inline)

export interface ChangeLogCountAggregateOutputTypeOutput {
  change_log_id: number;
  applied_at: number;
  description: number;
  _all: number;
}

import { z } from "zod";

export const ChangeLogCountAggregateOutputTypeOutputSchema = z.object({
  change_log_id: z.number(),
  applied_at: z.number(),
  description: z.number(),
  _all: z.number(),
});