// Auto-generated by prisma-dto-gen (refactored inline)

export interface ChangeLogMinOrderByAggregateInput {
  change_log_id?: any;
  applied_at?: any;
  description?: any;
}

import { z } from "zod";

export const ChangeLogMinOrderByAggregateInputSchema = z.object({
  change_log_id: z.any().optional(),
  applied_at: z.any().optional(),
  description: z.any().optional(),
});
