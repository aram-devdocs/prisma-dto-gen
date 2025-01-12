// Auto-generated by prisma-dto-gen (refactored inline)

export interface NestedBoolWithAggregatesFilter {
  equals?: any;
  not?:
    | boolean
    | {
        equals?: any;
        not?: boolean | any /* circular reference to NestedBoolWithAggregatesFilter */;
        _count?: any;
        _min?: any;
        _max?: any;
      };
  _count?: any;
  _min?: any;
  _max?: any;
}

import { z } from "zod";

export const NestedBoolWithAggregatesFilterSchema = z.object({
  equals: z.boolean().optional(),
  not: z.boolean().optional(),
  _count: z.any().optional(),
  _min: z.any().optional(),
  _max: z.any().optional(),
});
