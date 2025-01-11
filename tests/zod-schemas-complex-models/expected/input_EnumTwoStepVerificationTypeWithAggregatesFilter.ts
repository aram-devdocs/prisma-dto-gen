// Auto-generated by prisma-dto-gen (refactored inline)

export interface EnumTwoStepVerificationTypeWithAggregatesFilter {
  equals: any;
  in: any;
  notIn: any;
  not: any;
  _count: any;
  _min: any;
  _max: any;
}

import { z } from "zod";

export const EnumTwoStepVerificationTypeWithAggregatesFilterSchema = z.object({
  equals: z.enum(["EMAIL", "SMS", "PUSH"]),
  in: z.array(z.enum(["EMAIL", "SMS", "PUSH"])),
  notIn: z.array(z.enum(["EMAIL", "SMS", "PUSH"])),
  not: z.enum(["EMAIL", "SMS", "PUSH"]),
  _count: z.any(),
  _min: z.any(),
  _max: z.any(),
});