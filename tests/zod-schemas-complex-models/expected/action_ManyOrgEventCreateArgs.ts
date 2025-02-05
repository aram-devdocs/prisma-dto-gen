// Auto-generated by prisma-dto-gen (refactored inline)

export interface ManyOrgEventCreateArgs {
  data:
    | {
        org_event_id?: string;
        organization_id: string;
        event_name: string;
        start_time: Date;
        end_time?: any;
        location?: any;
      }
    | any /* circular reference to OrgEventCreateManyInput */;
  skipDuplicates?: boolean;
}

import { z } from "zod";

export const ManyOrgEventCreateArgsSchema = z.object({
  data: z.any(),
  skipDuplicates: z.boolean().optional(),
});
