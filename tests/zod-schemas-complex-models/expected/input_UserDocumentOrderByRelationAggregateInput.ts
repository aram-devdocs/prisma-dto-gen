// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserDocumentOrderByRelationAggregateInput {
  _count?: any;
}

import { z } from "zod";

export const UserDocumentOrderByRelationAggregateInputSchema = z.object({
  _count: z.any().optional(),
});
