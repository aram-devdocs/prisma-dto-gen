// Auto-generated by prisma-dto-gen (refactored inline)

export interface NotificationReferenceUncheckedCreateWithoutNotificationInput {
  notification_reference_id?: string;
  referenced_entity_id: string;
  status?: "DRAFT" | "REVIEW" | "PUBLISHED" | "ARCHIVED";
  archived?: any;
}

import { z } from "zod";

export const NotificationReferenceUncheckedCreateWithoutNotificationInputSchema = z.object({
  notification_reference_id: z.string().optional(),
  referenced_entity_id: z.string(),
  status: z.enum(["DRAFT", "REVIEW", "PUBLISHED", "ARCHIVED"]).optional(),
  archived: z.boolean().nullable().optional(),
});
