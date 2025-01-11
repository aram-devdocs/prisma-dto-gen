// Auto-generated by prisma-dto-gen (refactored inline)

export interface NotificationReferenceUpdateInput {
  notification_reference_id?: any;
  referenced_entity_id?: any;
  status?: any;
  archived?: any;
  notification?: any;
}

import { z } from "zod";

export const NotificationReferenceUpdateInputSchema = z.object({
  notification_reference_id: z.string().optional(),
  referenced_entity_id: z.string().optional(),
  status: z.enum(["DRAFT", "REVIEW", "PUBLISHED", "ARCHIVED"]).optional(),
  archived: z.boolean().nullable().optional(),
  notification: z.any().optional(),
});
