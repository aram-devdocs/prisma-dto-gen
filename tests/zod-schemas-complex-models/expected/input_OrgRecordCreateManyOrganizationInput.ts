// Auto-generated by prisma-dto-gen (refactored inline)

export interface OrgRecordCreateManyOrganizationInput {
  record_id: string;
  title: string;
  details?: any | null;
  created_on: Date;
  updated_on?: any | null;
}

import { z } from "zod";

export const OrgRecordCreateManyOrganizationInputSchema = z.object({
  record_id: z.string(),
  title: z.string(),
  details: z.string().nullable(),
  created_on: z.date(),
  updated_on: z.date().nullable(),
});