// Auto-generated by prisma-dto-gen (refactored inline)

export interface NotificationReferenceGroupByOutputTypeOutput {
  notification_reference_id: string;
  notification_id: string;
  referenced_entity_id: string;
  status: "DRAFT" | "REVIEW" | "PUBLISHED" | "ARCHIVED";
  archived?: boolean | null;
  _count?: any | null;
  _min?: any | null;
  _max?: any | null;
}

import { z } from "zod";

export const NotificationReferenceGroupByOutputTypeOutputSchema = z.object({
  notification_reference_id: z.string(),
  notification_id: z.string(),
  referenced_entity_id: z.string(),
  status: z.enum(["DRAFT", "REVIEW", "PUBLISHED", "ARCHIVED"]),
  archived: z.boolean().nullable(),
  _count: z.any().nullable(),
  _min: z.any().nullable(),
  _max: z.any().nullable(),
});