// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserAccountCreateManyUser_profileInputEnvelope {
  data: any;
  skipDuplicates: boolean;
}

import { z } from "zod";

export const UserAccountCreateManyUser_profileInputEnvelopeSchema = z.object({
  data: z.any(),
  skipDuplicates: z.boolean(),
});
