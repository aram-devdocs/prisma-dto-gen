// Auto-generated by prisma-dto-gen (refactored inline)

export interface NotificationReferenceMaxOrderByAggregateInput {
  notification_reference_id: any;
  notification_id: any;
  referenced_entity_id: any;
  status: any;
  archived: any;
}

import { z } from "zod";

export const NotificationReferenceMaxOrderByAggregateInputSchema = z.object({
  notification_reference_id: z.any(),
  notification_id: z.any(),
  referenced_entity_id: z.any(),
  status: z.any(),
  archived: z.any(),
});