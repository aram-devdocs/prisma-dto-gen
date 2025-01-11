// Auto-generated by prisma-dto-gen (refactored inline)

export interface NotificationReferenceScalarWhereWithAggregatesInput {
  AND: any;
  OR: any;
  NOT: any;
  notification_reference_id: any;
  notification_id: any;
  referenced_entity_id: any;
  status: any;
  archived?: any;
}

import { z } from "zod";

export const NotificationReferenceScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.any(),
  OR: z.array(z.any()),
  NOT: z.any(),
  notification_reference_id: z.any(),
  notification_id: z.any(),
  referenced_entity_id: z.any(),
  status: z.any(),
  archived: z.any().optional(),
});
