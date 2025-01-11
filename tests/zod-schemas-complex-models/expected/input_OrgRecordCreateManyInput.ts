// Auto-generated by prisma-dto-gen (refactored inline)

export interface OrgRecordCreateManyInput {
  record_id: string;
  organization_id: string;
  title: string;
  details?: any;
  created_on: Date;
  updated_on?: any;
}

import { z } from "zod";

export const OrgRecordCreateManyInputSchema = z.object({
  record_id: z.string(),
  organization_id: z.string(),
  title: z.string(),
  details: z.string().optional(),
  created_on: z.date(),
  updated_on: z.date().optional(),
});
