// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserGroupByOutputTypeOutput {
  id: number;
  name: string;
  email: string;
  _count: any;
  _avg: any;
  _sum: any;
  _min: any;
  _max: any;
}

import { z } from "zod";

export const UserGroupByOutputTypeOutputSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  _count: z.any().nullable(),
  _avg: z.any().nullable(),
  _sum: z.any().nullable(),
  _min: z.any().nullable(),
  _max: z.any().nullable(),
});
