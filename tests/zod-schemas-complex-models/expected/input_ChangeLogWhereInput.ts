// Auto-generated by prisma-dto-gen (refactored inline)

export interface ChangeLogWhereInput {
  AND: any;
  OR: any;
  NOT: any;
  change_log_id: any;
  applied_at: any;
  description: any;
}

import { z } from "zod";

export const ChangeLogWhereInputSchema = z.object({
  AND: z.any(),
  OR: z.array(z.any()),
  NOT: z.any(),
  change_log_id: z.any(),
  applied_at: z.any(),
  description: z.any(),
});
