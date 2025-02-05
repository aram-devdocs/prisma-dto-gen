// Auto-generated by prisma-dto-gen (refactored inline)

export interface ChangeLogCreateInput {
  change_log_id?: string;
  applied_at: Date;
  description: string;
}

import { z } from "zod";

export const ChangeLogCreateInputSchema = z.object({
  change_log_id: z.string().optional(),
  applied_at: z.date(),
  description: z.string(),
});
