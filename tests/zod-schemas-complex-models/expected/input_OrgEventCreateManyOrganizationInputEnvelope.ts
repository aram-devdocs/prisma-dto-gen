// Auto-generated by prisma-dto-gen (refactored inline)

export interface OrgEventCreateManyOrganizationInputEnvelope {
  data: any;
  skipDuplicates: boolean;
}

import { z } from "zod";

export const OrgEventCreateManyOrganizationInputEnvelopeSchema = z.object({
  data: z.any(),
  skipDuplicates: z.boolean(),
});