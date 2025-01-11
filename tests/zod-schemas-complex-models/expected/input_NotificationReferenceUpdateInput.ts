// Auto-generated by prisma-dto-gen (refactored inline)

export interface NotificationReferenceUpdateInput {
  notification_reference_id: any;
  referenced_entity_id: any;
  status: any;
  archived?: any | null;
  notification: any;
}

import { z } from "zod";

export const NotificationReferenceUpdateInputSchema = z.object({
  notification_reference_id: z.string(),
  referenced_entity_id: z.string(),
  status: z.enum(["DRAFT", "REVIEW", "PUBLISHED", "ARCHIVED"]),
  archived: z.boolean().nullable(),
  notification: z.any(),
});