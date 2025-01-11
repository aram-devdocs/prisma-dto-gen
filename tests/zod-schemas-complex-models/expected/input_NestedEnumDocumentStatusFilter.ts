// Auto-generated by prisma-dto-gen (refactored inline)

export interface NestedEnumDocumentStatusFilter {
  equals?: any;
  in?: any;
  notIn?: any;
  not?: any;
}

import { z } from "zod";

export const NestedEnumDocumentStatusFilterSchema = z.object({
  equals: z.enum(["DRAFT", "REVIEW", "PUBLISHED", "ARCHIVED"]).optional(),
  in: z.array(z.enum(["DRAFT", "REVIEW", "PUBLISHED", "ARCHIVED"])).optional(),
  notIn: z.array(z.enum(["DRAFT", "REVIEW", "PUBLISHED", "ARCHIVED"])).optional(),
  not: z.enum(["DRAFT", "REVIEW", "PUBLISHED", "ARCHIVED"]).optional(),
});
