// Auto-generated by prisma-dto-gen (refactored inline)

export interface NestedEnumTwoStepVerificationTypeWithAggregatesFilter {
  equals?: any;
  in?: any;
  notIn?: any;
  not?:
    | "EMAIL"
    | "SMS"
    | "PUSH"
    | {
        equals?: any;
        in?: any;
        notIn?: any;
        not?:
          | "EMAIL"
          | "SMS"
          | "PUSH"
          | any /* circular reference to NestedEnumTwoStepVerificationTypeWithAggregatesFilter */;
        _count?: any;
        _min?: any;
        _max?: any;
      };
  _count?: any;
  _min?: any;
  _max?: any;
}

import { z } from "zod";

export const NestedEnumTwoStepVerificationTypeWithAggregatesFilterSchema = z.object({
  equals: z.enum(["EMAIL", "SMS", "PUSH"]).optional(),
  in: z.array(z.enum(["EMAIL", "SMS", "PUSH"])).optional(),
  notIn: z.array(z.enum(["EMAIL", "SMS", "PUSH"])).optional(),
  not: z.enum(["EMAIL", "SMS", "PUSH"]).optional(),
  _count: z.any().optional(),
  _min: z.any().optional(),
  _max: z.any().optional(),
});
