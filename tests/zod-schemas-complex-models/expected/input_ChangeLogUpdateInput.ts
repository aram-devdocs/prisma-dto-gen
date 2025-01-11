// Auto-generated by prisma-dto-gen (refactored inline)

export interface ChangeLogUpdateInput {
  change_log_id?: any;
  applied_at?: any;
  description?: any;
}

import { z } from "zod";

export const ChangeLogUpdateInputSchema = z.object({
  change_log_id: z.string().optional(),
  applied_at: z.date().optional(),
  description: z.string().optional(),
});
