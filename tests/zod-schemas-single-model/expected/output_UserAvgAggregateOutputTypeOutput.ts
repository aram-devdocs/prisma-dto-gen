// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserAvgAggregateOutputTypeOutput {
  id?: number | null;
}

import { z } from "zod";

export const UserAvgAggregateOutputTypeOutputSchema = z.object({
  id: z.number().nullable(),
});