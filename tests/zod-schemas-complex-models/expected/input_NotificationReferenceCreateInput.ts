// Auto-generated by prisma-dto-gen (refactored inline)

export interface NotificationReferenceCreateInput {
  notification_reference_id: string;
  referenced_entity_id: string;
  status: "DRAFT" | "REVIEW" | "PUBLISHED" | "ARCHIVED";
  archived?: any | null;
  notification: any;
}

import { z } from "zod";

export const NotificationReferenceCreateInputSchema = z.object({
  notification_reference_id: z.string(),
  referenced_entity_id: z.string(),
  status: z.enum(["DRAFT", "REVIEW", "PUBLISHED", "ARCHIVED"]),
  archived: z.boolean().nullable(),
  notification: z.any(),
});
