// Auto-generated by prisma-dto-gen (refactored inline)

export interface QueryOutput {
  findFirstUser: {
    id: number;
    name: string;
    email: string;
  };
  findFirstUserOrThrow: any /* circular reference to User */;
  findManyUser: any /* circular reference to User */;
  aggregateUser: any;
  groupByUser: any;
  findUniqueUser: any /* circular reference to User */;
  findUniqueUserOrThrow: any /* circular reference to User */;
}

import { z } from "zod";

export const QueryOutputSchema = z.object({
  findFirstUser: z
    .object({
      id: z.number(),
      name: z.string(),
      email: z.string(),
    })
    .nullable(),
  findFirstUserOrThrow: z
    .object({
      id: z.number(),
      name: z.string(),
      email: z.string(),
    })
    .nullable(),
  findManyUser: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      email: z.string(),
    }),
  ),
  aggregateUser: z.any(),
  groupByUser: z.array(z.any()),
  findUniqueUser: z
    .object({
      id: z.number(),
      name: z.string(),
      email: z.string(),
    })
    .nullable(),
  findUniqueUserOrThrow: z
    .object({
      id: z.number(),
      name: z.string(),
      email: z.string(),
    })
    .nullable(),
});
