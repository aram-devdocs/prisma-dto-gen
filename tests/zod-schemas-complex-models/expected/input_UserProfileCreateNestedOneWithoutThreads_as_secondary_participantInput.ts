// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserProfileCreateNestedOneWithoutThreads_as_secondary_participantInput {
  create: any;
  connectOrCreate: any;
  connect: any;
}

import { z } from "zod";

export const UserProfileCreateNestedOneWithoutThreads_as_secondary_participantInputSchema =
  z.object({
    create: z.any(),
    connectOrCreate: z.any(),
    connect: z.any(),
  });