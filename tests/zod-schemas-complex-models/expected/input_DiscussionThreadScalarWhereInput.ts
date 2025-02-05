// Auto-generated by prisma-dto-gen (refactored inline)

export interface DiscussionThreadScalarWhereInput {
  AND?:
    | {
        AND?: any /* circular reference to DiscussionThreadScalarWhereInput */;
        OR?: any /* circular reference to DiscussionThreadScalarWhereInput */;
        NOT?: any /* circular reference to DiscussionThreadScalarWhereInput */;
        thread_id?: any;
        primary_participant?: any;
        secondary_participant?: any;
        created_on?: any;
        closed_on?: any;
        is_flagged?: any;
        flagged_reason?: any;
      }
    | any /* circular reference to DiscussionThreadScalarWhereInput */;
  OR?: any /* circular reference to DiscussionThreadScalarWhereInput */;
  NOT?: any /* circular reference to DiscussionThreadScalarWhereInput */;
  thread_id?: any;
  primary_participant?: any;
  secondary_participant?: any;
  created_on?: any;
  closed_on?: any;
  is_flagged?: any;
  flagged_reason?: any;
}

import { z } from "zod";

export const DiscussionThreadScalarWhereInputSchema = z.object({
  AND: z.any().optional(),
  OR: z.array(z.any()).optional(),
  NOT: z.any().optional(),
  thread_id: z.any().optional(),
  primary_participant: z.any().optional(),
  secondary_participant: z.any().nullable().optional(),
  created_on: z.any().optional(),
  closed_on: z.any().nullable().optional(),
  is_flagged: z.any().nullable().optional(),
  flagged_reason: z.any().nullable().optional(),
});
