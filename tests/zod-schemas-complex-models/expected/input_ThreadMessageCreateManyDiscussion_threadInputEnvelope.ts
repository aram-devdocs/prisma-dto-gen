// Auto-generated by prisma-dto-gen (refactored inline)

export interface ThreadMessageCreateManyDiscussion_threadInputEnvelope {
  data: any;
  skipDuplicates: boolean;
}

import { z } from "zod";

export const ThreadMessageCreateManyDiscussion_threadInputEnvelopeSchema = z.object({
  data: z.any(),
  skipDuplicates: z.boolean(),
});
