// Auto-generated by prisma-dto-gen (refactored inline)

export interface NestedStringWithAggregatesFilter {
  equals?: any;
  in?: any;
  notIn?: any;
  lt?: any;
  lte?: any;
  gt?: any;
  gte?: any;
  contains?: any;
  startsWith?: any;
  endsWith?: any;
  not?:
    | string
    | {
        equals?: any;
        in?: any;
        notIn?: any;
        lt?: any;
        lte?: any;
        gt?: any;
        gte?: any;
        contains?: any;
        startsWith?: any;
        endsWith?: any;
        not?: string | any /* circular reference to NestedStringWithAggregatesFilter */;
        _count?: any;
        _min?: any;
        _max?: any;
      };
  _count?: any;
  _min?: any;
  _max?: any;
}

import { z } from "zod";

export const NestedStringWithAggregatesFilterSchema = z.object({
  equals: z.string().optional(),
  in: z.array(z.string()).optional(),
  notIn: z.array(z.string()).optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.string().optional(),
  _count: z.any().optional(),
  _min: z.any().optional(),
  _max: z.any().optional(),
});
