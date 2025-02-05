// Auto-generated by prisma-dto-gen (refactored inline)

export interface OrgRecordUpdateInput {
  record_id?: any;
  title?: any;
  details?: any;
  created_on?: any;
  updated_on?: any;
  organization?: any;
}

import { z } from "zod";

export const OrgRecordUpdateInputSchema = z.object({
  record_id: z.string().optional(),
  title: z.string().optional(),
  details: z.string().nullable().optional(),
  created_on: z.date().optional(),
  updated_on: z.date().nullable().optional(),
  organization: z.any().optional(),
});
