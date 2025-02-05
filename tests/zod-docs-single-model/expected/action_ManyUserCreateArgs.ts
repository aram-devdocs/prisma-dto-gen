// Auto-generated by prisma-dto-gen (refactored inline)

export interface ManyUserCreateArgs {
  data:
    | {
        id?: number;
        name: string;
        email: string;
        age?: any;
        isFoo?: boolean;
        password: string;
        createdAt?: Date;
        updatedAt?: Date;
      }
    | any /* circular reference to UserCreateManyInput */;
}

import { z } from "zod";

export const ManyUserCreateArgsSchema = z.object({
  data: z.any(),
});
