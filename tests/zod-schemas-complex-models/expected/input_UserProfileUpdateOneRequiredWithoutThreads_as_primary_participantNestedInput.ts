// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserProfileUpdateOneRequiredWithoutThreads_as_primary_participantNestedInput {
  create: any;
  connectOrCreate: any;
  upsert: any;
  connect: any;
  update: any;
}

import { z } from "zod";

export const UserProfileUpdateOneRequiredWithoutThreads_as_primary_participantNestedInputSchema =
  z.object({
    create: z.any(),
    connectOrCreate: z.any(),
    upsert: z.any(),
    connect: z.any(),
    update: z.any(),
  });
