// Auto-generated by prisma-dto-gen (refactored inline)

export interface NotificationReferenceGroupByOutputTypeOutput {
  notification_reference_id: string;
  notification_id: string;
  referenced_entity_id: string;
  status: "DRAFT" | "REVIEW" | "PUBLISHED" | "ARCHIVED";
  archived?: boolean;
  _count?: any;
  _min?: any;
  _max?: any;
}

import { z } from "zod";

export const NotificationReferenceGroupByOutputTypeOutputSchema = z.object({
  notification_reference_id: z.string(),
  notification_id: z.string(),
  referenced_entity_id: z.string(),
  status: z.enum(["DRAFT", "REVIEW", "PUBLISHED", "ARCHIVED"]),
  archived: z.boolean().optional(),
  _count: z.any().optional(),
  _min: z.any().optional(),
  _max: z.any().optional(),
});
