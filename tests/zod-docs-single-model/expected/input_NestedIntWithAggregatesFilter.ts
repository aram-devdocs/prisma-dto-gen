// Auto-generated by prisma-dto-gen (refactored inline)

export interface NestedIntWithAggregatesFilter {
  equals?: any;
  in?: number[];
  notIn?: number[];
  lt?: any;
  lte?: any;
  gt?: any;
  gte?: any;
  not?:
    | number
    | {
        equals?: any;
        in?: number[];
        notIn?: number[];
        lt?: any;
        lte?: any;
        gt?: any;
        gte?: any;
        not?: number | any /* circular reference to NestedIntWithAggregatesFilter */;
        _count?: any;
        _avg?: any;
        _sum?: any;
        _min?: any;
        _max?: any;
      };
  _count?: any;
  _avg?: any;
  _sum?: any;
  _min?: any;
  _max?: any;
}

import { z } from "zod";

export const NestedIntWithAggregatesFilterSchema = z.object({
  equals: z.number().optional(),
  in: z.array(z.number()).optional(),
  notIn: z.array(z.number()).optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.number().optional(),
  _count: z.any().optional(),
  _avg: z.any().optional(),
  _sum: z.any().optional(),
  _min: z.any().optional(),
  _max: z.any().optional(),
});
