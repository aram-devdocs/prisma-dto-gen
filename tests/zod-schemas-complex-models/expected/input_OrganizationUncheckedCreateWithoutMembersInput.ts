// Auto-generated by prisma-dto-gen (refactored inline)

export interface OrganizationUncheckedCreateWithoutMembersInput {
  organization_id?: string;
  name: string;
  description?: any;
  created_on?: Date;
  updated_on?: any;
  is_active?: any;
  events?: any;
  records?: any;
}

import { z } from "zod";

export const OrganizationUncheckedCreateWithoutMembersInputSchema = z.object({
  organization_id: z.string().optional(),
  name: z.string(),
  description: z.string().nullable().optional(),
  created_on: z.date().optional(),
  updated_on: z.date().nullable().optional(),
  is_active: z.boolean().nullable().optional(),
  events: z.any().optional(),
  records: z.any().optional(),
});
