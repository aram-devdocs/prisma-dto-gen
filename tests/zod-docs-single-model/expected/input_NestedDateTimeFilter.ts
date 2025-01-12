// Auto-generated by prisma-dto-gen (refactored inline)

export interface NestedDateTimeFilter {
  equals?: any;
  in?: Date[];
  notIn?: Date[];
  lt?: any;
  lte?: any;
  gt?: any;
  gte?: any;
  not?:
    | Date
    | {
        equals?: any;
        in?: Date[];
        notIn?: Date[];
        lt?: any;
        lte?: any;
        gt?: any;
        gte?: any;
        not?: Date | any /* circular reference to NestedDateTimeFilter */;
      };
}

import { z } from "zod";

export const NestedDateTimeFilterSchema = z.object({
  equals: z.date().optional(),
  in: z.array(z.date()).optional(),
  notIn: z.array(z.date()).optional(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.date().optional(),
});
