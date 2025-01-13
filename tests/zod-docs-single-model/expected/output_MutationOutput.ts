// Auto-generated by prisma-dto-gen (refactored inline)

type JsonValue =
  | string
  | number
  | boolean
  | { [key: string]: Record<string, unknown> }
  | Record<string, unknown>[]
  | null;

export interface MutationOutput {
  createOneUser: {
    id: number;
    name: string;
    email: string;
    age?: number | null;
    isFoo: boolean;
    password: string;
    createdAt: Date;
    updatedAt: Date;
  };
  upsertOneUser: any /* circular reference to User */;
  createManyUser: any;
  createManyUserAndReturn: any;
  deleteOneUser: any /* circular reference to User */;
  updateOneUser: any /* circular reference to User */;
  updateManyUser: any;
  deleteManyUser: any;
  executeRaw: JsonValue;
  queryRaw: JsonValue;
}

import { z } from "zod";

export const MutationOutputSchema = z.object({
  createOneUser: z.object({
    id: z.number(),
    name: z.string().min(1).max(100),
    email: z.string().email(),
    age: z.number().int().min(0).max(120).nullable(),
    isFoo: z.boolean(),
    password: z
      .string()
      .min(8)
      .max(32)
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/)
      .describe(
        "Password must be 8-32 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
      ),
    createdAt: z.date(),
    updatedAt: z.date(),
  }),
  upsertOneUser: z.object({
    id: z.number(),
    name: z.string().min(1).max(100),
    email: z.string().email(),
    age: z.number().int().min(0).max(120).nullable(),
    isFoo: z.boolean(),
    password: z
      .string()
      .min(8)
      .max(32)
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/)
      .describe(
        "Password must be 8-32 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
      ),
    createdAt: z.date(),
    updatedAt: z.date(),
  }),
  createManyUser: z.any(),
  createManyUserAndReturn: z.array(z.any()),
  deleteOneUser: z
    .object({
      id: z.number(),
      name: z.string().min(1).max(100),
      email: z.string().email(),
      age: z.number().int().min(0).max(120).nullable(),
      isFoo: z.boolean(),
      password: z
        .string()
        .min(8)
        .max(32)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/)
        .describe(
          "Password must be 8-32 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
        ),
      createdAt: z.date(),
      updatedAt: z.date(),
    })
    .nullable(),
  updateOneUser: z
    .object({
      id: z.number(),
      name: z.string().min(1).max(100),
      email: z.string().email(),
      age: z.number().int().min(0).max(120).nullable(),
      isFoo: z.boolean(),
      password: z
        .string()
        .min(8)
        .max(32)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/)
        .describe(
          "Password must be 8-32 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
        ),
      createdAt: z.date(),
      updatedAt: z.date(),
    })
    .nullable(),
  updateManyUser: z.any(),
  deleteManyUser: z.any(),
  executeRaw: z.any(),
  queryRaw: z.any(),
});
