// Auto-generated by prisma-dto-gen (refactored inline)

export interface NotificationReferenceScalarWhereInput {
  AND?:
    | {
        AND?: any /* circular reference to NotificationReferenceScalarWhereInput */;
        OR?: any /* circular reference to NotificationReferenceScalarWhereInput */;
        NOT?: any /* circular reference to NotificationReferenceScalarWhereInput */;
        notification_reference_id?: any;
        notification_id?: any;
        referenced_entity_id?: any;
        status?: any;
        archived?: any;
      }
    | any /* circular reference to NotificationReferenceScalarWhereInput */;
  OR?: any /* circular reference to NotificationReferenceScalarWhereInput */;
  NOT?: any /* circular reference to NotificationReferenceScalarWhereInput */;
  notification_reference_id?: any;
  notification_id?: any;
  referenced_entity_id?: any;
  status?: any;
  archived?: any;
}

import { z } from "zod";

export const NotificationReferenceScalarWhereInputSchema = z.object({
  AND: z.any().optional(),
  OR: z.array(z.any()).optional(),
  NOT: z.any().optional(),
  notification_reference_id: z.any().optional(),
  notification_id: z.any().optional(),
  referenced_entity_id: z.any().optional(),
  status: z.any().optional(),
  archived: z.any().nullable().optional(),
});
