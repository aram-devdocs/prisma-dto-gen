// Auto-generated by prisma-dto-gen (refactored inline)

export interface SortOrderInput {
  sort: any;
  nulls?: any;
}

import { z } from "zod";

export const SortOrderInputSchema = z.object({
  sort: z.any(),
  nulls: z.any().optional(),
});
