// Auto-generated by prisma-dto-gen (refactored inline)

export interface DiscussionThreadCreateManyParticipant_oneInputEnvelope {
  data: any;
  skipDuplicates?: boolean;
}

import { z } from "zod";

export const DiscussionThreadCreateManyParticipant_oneInputEnvelopeSchema = z.object({
  data: z.any(),
  skipDuplicates: z.boolean().optional(),
});
