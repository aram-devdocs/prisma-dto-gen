// Auto-generated by prisma-dto-gen (refactored inline)

export interface EnumDocumentStatusWithAggregatesFilter {
  equals?: any;
  in?: any;
  notIn?: any;
  not?: any;
  _count?: any;
  _min?: any;
  _max?: any;
}

import { z } from "zod";

export const EnumDocumentStatusWithAggregatesFilterSchema = z.object({
  equals: z.enum(["DRAFT", "REVIEW", "PUBLISHED", "ARCHIVED"]).optional(),
  in: z.array(z.enum(["DRAFT", "REVIEW", "PUBLISHED", "ARCHIVED"])).optional(),
  notIn: z.array(z.enum(["DRAFT", "REVIEW", "PUBLISHED", "ARCHIVED"])).optional(),
  not: z.enum(["DRAFT", "REVIEW", "PUBLISHED", "ARCHIVED"]).optional(),
  _count: z.any().optional(),
  _min: z.any().optional(),
  _max: z.any().optional(),
});
