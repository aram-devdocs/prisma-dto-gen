// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserCommentCreateManyUser_profileInputEnvelope {
  data: any;
  skipDuplicates?: boolean;
}

import { z } from "zod";

export const UserCommentCreateManyUser_profileInputEnvelopeSchema = z.object({
  data: z.any(),
  skipDuplicates: z.boolean().optional(),
});
