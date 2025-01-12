// Auto-generated by prisma-dto-gen (refactored inline)

export interface OrganizationWhereInput {
  AND?:
    | {
        AND?: any /* circular reference to OrganizationWhereInput */;
        OR?: any /* circular reference to OrganizationWhereInput */;
        NOT?: any /* circular reference to OrganizationWhereInput */;
        organization_id?: any;
        name?: any;
        description?: any;
        created_on?: any;
        updated_on?: any;
        is_active?: any;
        events?: any;
        members?: any;
        records?: any;
      }
    | any /* circular reference to OrganizationWhereInput */;
  OR?: any /* circular reference to OrganizationWhereInput */;
  NOT?: any /* circular reference to OrganizationWhereInput */;
  organization_id?: any;
  name?: any;
  description?: any;
  created_on?: any;
  updated_on?: any;
  is_active?: any;
  events?: any;
  members?: any;
  records?: any;
}

import { z } from "zod";

export const OrganizationWhereInputSchema = z.object({
  AND: z.any().optional(),
  OR: z.array(z.any()).optional(),
  NOT: z.any().optional(),
  organization_id: z.any().optional(),
  name: z.any().optional(),
  description: z.any().nullable().optional(),
  created_on: z.any().optional(),
  updated_on: z.any().nullable().optional(),
  is_active: z.any().nullable().optional(),
  events: z.any().optional(),
  members: z.any().optional(),
  records: z.any().optional(),
});
