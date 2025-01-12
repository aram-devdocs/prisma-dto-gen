// Auto-generated by prisma-dto-gen (refactored inline)

export interface ManyDiscussionThreadCreateArgs {
  data:
    | {
        thread_id?: string;
        primary_participant: string;
        secondary_participant?: any;
        created_on?: Date;
        closed_on?: any;
        is_flagged?: any;
        flagged_reason?: any;
      }
    | any /* circular reference to DiscussionThreadCreateManyInput */;
  skipDuplicates?: boolean;
}

import { z } from "zod";

export const ManyDiscussionThreadCreateArgsSchema = z.object({
  data: z.any(),
  skipDuplicates: z.boolean().optional(),
});
