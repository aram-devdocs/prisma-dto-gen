// Auto-generated by prisma-dto-gen (refactored inline)

export interface NestedEnumDocumentStatusWithAggregatesFilter {
  equals?: any;
  in?: any;
  notIn?: any;
  not?:
    | "DRAFT"
    | "REVIEW"
    | "PUBLISHED"
    | "ARCHIVED"
    | {
        equals?: any;
        in?: any;
        notIn?: any;
        not?:
          | "DRAFT"
          | "REVIEW"
          | "PUBLISHED"
          | "ARCHIVED"
          | any /* circular reference to NestedEnumDocumentStatusWithAggregatesFilter */;
        _count?: any;
        _min?: any;
        _max?: any;
      };
  _count?: any;
  _min?: any;
  _max?: any;
}

import { z } from "zod";

export const NestedEnumDocumentStatusWithAggregatesFilterSchema = z.object({
  equals: z.enum(["DRAFT", "REVIEW", "PUBLISHED", "ARCHIVED"]).optional(),
  in: z.array(z.enum(["DRAFT", "REVIEW", "PUBLISHED", "ARCHIVED"])).optional(),
  notIn: z.array(z.enum(["DRAFT", "REVIEW", "PUBLISHED", "ARCHIVED"])).optional(),
  not: z.enum(["DRAFT", "REVIEW", "PUBLISHED", "ARCHIVED"]).optional(),
  _count: z.any().optional(),
  _min: z.any().optional(),
  _max: z.any().optional(),
});
