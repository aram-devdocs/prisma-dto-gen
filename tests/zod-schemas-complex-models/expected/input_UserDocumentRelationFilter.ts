// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserDocumentRelationFilter {
  is?: any;
  isNot?: any;
}

import { z } from "zod";

export const UserDocumentRelationFilterSchema = z.object({
  is: z.any().optional(),
  isNot: z.any().optional(),
});
