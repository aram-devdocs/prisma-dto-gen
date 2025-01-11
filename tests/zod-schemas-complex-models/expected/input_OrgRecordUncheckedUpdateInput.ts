// Auto-generated by prisma-dto-gen (refactored inline)

export interface OrgRecordUncheckedUpdateInput {
  record_id: any;
  organization_id: any;
  title: any;
  details?: any;
  created_on: any;
  updated_on?: any;
}

import { z } from "zod";

export const OrgRecordUncheckedUpdateInputSchema = z.object({
  record_id: z.string(),
  organization_id: z.string(),
  title: z.string(),
  details: z.string().optional(),
  created_on: z.date(),
  updated_on: z.date().optional(),
});
