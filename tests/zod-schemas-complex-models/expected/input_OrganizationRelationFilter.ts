// Auto-generated by prisma-dto-gen (refactored inline)

export interface OrganizationRelationFilter {
  is?: any;
  isNot?: any;
}

import { z } from "zod";

export const OrganizationRelationFilterSchema = z.object({
  is: z.any().optional(),
  isNot: z.any().optional(),
});
