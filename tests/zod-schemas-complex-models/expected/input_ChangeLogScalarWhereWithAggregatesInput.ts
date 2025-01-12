// Auto-generated by prisma-dto-gen (refactored inline)

export interface ChangeLogScalarWhereWithAggregatesInput {
  AND?:
    | {
        AND?: any /* circular reference to ChangeLogScalarWhereWithAggregatesInput */;
        OR?: any /* circular reference to ChangeLogScalarWhereWithAggregatesInput */;
        NOT?: any /* circular reference to ChangeLogScalarWhereWithAggregatesInput */;
        change_log_id?: any;
        applied_at?: any;
        description?: any;
      }
    | any /* circular reference to ChangeLogScalarWhereWithAggregatesInput */;
  OR?: any /* circular reference to ChangeLogScalarWhereWithAggregatesInput */;
  NOT?: any /* circular reference to ChangeLogScalarWhereWithAggregatesInput */;
  change_log_id?: any;
  applied_at?: any;
  description?: any;
}

import { z } from "zod";

export const ChangeLogScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.any().optional(),
  OR: z.array(z.any()).optional(),
  NOT: z.any().optional(),
  change_log_id: z.any().optional(),
  applied_at: z.any().optional(),
  description: z.any().optional(),
});
