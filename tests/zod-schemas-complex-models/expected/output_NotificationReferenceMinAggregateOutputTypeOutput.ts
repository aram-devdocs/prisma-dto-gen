// Auto-generated by prisma-dto-gen (refactored inline)

export interface NotificationReferenceMinAggregateOutputTypeOutput {
  notification_reference_id: string;
  notification_id: string;
  referenced_entity_id: string;
  status: "DRAFT" | "REVIEW" | "PUBLISHED" | "ARCHIVED";
  archived: boolean;
}

import { z } from "zod";

export const NotificationReferenceMinAggregateOutputTypeOutputSchema = z.object({
  notification_reference_id: z.string().nullable(),
  notification_id: z.string().nullable(),
  referenced_entity_id: z.string().nullable(),
  status: z.enum(["DRAFT", "REVIEW", "PUBLISHED", "ARCHIVED"]).nullable(),
  archived: z.boolean().nullable(),
});
