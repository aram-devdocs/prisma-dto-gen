// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserAccountListRelationFilter {
  every?: any;
  some?: any;
  none?: any;
}

import { z } from "zod";

export const UserAccountListRelationFilterSchema = z.object({
  every: z.any().optional(),
  some: z.any().optional(),
  none: z.any().optional(),
});
