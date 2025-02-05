// Auto-generated by prisma-dto-gen (refactored inline)

export interface CreateManyUserAndReturnOutputTypeOutput {
  id: number;
  name: string;
  email: string;
  age: number;
  isFoo: boolean;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

import { z } from "zod";

export const CreateManyUserAndReturnOutputTypeOutputSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  age: z.number().nullable(),
  isFoo: z.boolean(),
  password: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});
