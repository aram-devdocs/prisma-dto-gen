// Auto-generated by prisma-dto-gen (refactored inline)

export interface OrgRecordCountOrderByAggregateInput {
  record_id: any;
  organization_id: any;
  title: any;
  details: any;
  created_on: any;
  updated_on: any;
}

import { z } from "zod";

export const OrgRecordCountOrderByAggregateInputSchema = z.object({
  record_id: z.any(),
  organization_id: z.any(),
  title: z.any(),
  details: z.any(),
  created_on: z.any(),
  updated_on: z.any(),
});
