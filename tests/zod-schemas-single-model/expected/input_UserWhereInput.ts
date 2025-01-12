// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserWhereInput {
  AND?:
    | {
        AND?: any /* circular reference to UserWhereInput */;
        OR?: any /* circular reference to UserWhereInput */;
        NOT?: any /* circular reference to UserWhereInput */;
        id?: any;
        name?: any;
        email?: any;
      }
    | any /* circular reference to UserWhereInput */;
  OR?: any /* circular reference to UserWhereInput */;
  NOT?: any /* circular reference to UserWhereInput */;
  id?: any;
  name?: any;
  email?: any;
}

import { z } from "zod";

export const UserWhereInputSchema = z.object({
  AND: z.any().optional(),
  OR: z.array(z.any()).optional(),
  NOT: z.any().optional(),
  id: z.any().optional(),
  name: z.any().optional(),
  email: z.any().optional(),
});
