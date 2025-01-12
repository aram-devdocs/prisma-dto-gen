// Auto-generated by prisma-dto-gen (refactored inline)

export interface OneUserCreateArgs {
  data:
    | {
        name: string;
        email: string;
        age?: any;
        isFoo?: boolean;
        password: string;
        createdAt?: Date;
        updatedAt?: Date;
      }
    | {
        id?: number;
        name: string;
        email: string;
        age?: any;
        isFoo?: boolean;
        password: string;
        createdAt?: Date;
        updatedAt?: Date;
      };
}

import { z } from "zod";

export const OneUserCreateArgsSchema = z.object({
  data: z.any(),
});