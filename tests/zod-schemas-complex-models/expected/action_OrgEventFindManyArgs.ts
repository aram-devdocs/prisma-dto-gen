// Auto-generated by prisma-dto-gen (refactored inline)

export interface OrgEventFindManyArgs {
  where?: {
    AND?: any /* circular reference to OrgEventWhereInput */;
    OR?: any /* circular reference to OrgEventWhereInput */;
    NOT?: any /* circular reference to OrgEventWhereInput */;
    org_event_id?:
      | {
          equals?: any;
          in?: any;
          notIn?: any;
          lt?: any;
          lte?: any;
          gt?: any;
          gte?: any;
          contains?: any;
          startsWith?: any;
          endsWith?: any;
          mode?: any;
          not?:
            | string
            | {
                equals?: any;
                in?: any;
                notIn?: any;
                lt?: any;
                lte?: any;
                gt?: any;
                gte?: any;
                contains?: any;
                startsWith?: any;
                endsWith?: any;
                not?: string | any /* circular reference to NestedStringFilter */;
              };
        }
      | string;
    organization_id?: any /* circular reference to StringFilter */ | string;
    event_name?: any /* circular reference to StringFilter */ | string;
    start_time?:
      | {
          equals?: any;
          in?: any;
          notIn?: any;
          lt?: any;
          lte?: any;
          gt?: any;
          gte?: any;
          not?:
            | Date
            | {
                equals?: any;
                in?: any;
                notIn?: any;
                lt?: any;
                lte?: any;
                gt?: any;
                gte?: any;
                not?: Date | any /* circular reference to NestedDateTimeFilter */;
              };
        }
      | Date;
    end_time?: any;
    location?: any;
    organization?:
      | {
          is?: {
            AND?: any /* circular reference to OrganizationWhereInput */;
            OR?: any /* circular reference to OrganizationWhereInput */;
            NOT?: any /* circular reference to OrganizationWhereInput */;
            organization_id?: any /* circular reference to StringFilter */ | string;
            name?: any /* circular reference to StringFilter */ | string;
            description?: any;
            created_on?: any /* circular reference to DateTimeFilter */ | Date;
            updated_on?: any;
            is_active?: any;
            events?: {
              every?: any /* circular reference to OrgEventWhereInput */;
              some?: any /* circular reference to OrgEventWhereInput */;
              none?: any /* circular reference to OrgEventWhereInput */;
            };
            members?: {
              every?: {
                AND?: any /* max depth reached */;
                OR?: any /* max depth reached */;
                NOT?: any /* max depth reached */;
                membership_id?: any /* max depth reached */;
                organization_id?: any /* max depth reached */;
                profile_id?: any /* max depth reached */;
                joined_on?: any /* max depth reached */;
                is_active?: any /* max depth reached */;
                organization?: any /* max depth reached */;
                user_profile?: any /* max depth reached */;
              };
              some?: any /* circular reference to OrgMembershipWhereInput */;
              none?: any /* circular reference to OrgMembershipWhereInput */;
            };
            records?: {
              every?: {
                AND?: any /* max depth reached */;
                OR?: any /* max depth reached */;
                NOT?: any /* max depth reached */;
                record_id?: any /* max depth reached */;
                organization_id?: any /* max depth reached */;
                title?: any /* max depth reached */;
                details?: any /* max depth reached */;
                created_on?: any /* max depth reached */;
                updated_on?: any /* max depth reached */;
                organization?: any /* max depth reached */;
              };
              some?: any /* circular reference to OrgRecordWhereInput */;
              none?: any /* circular reference to OrgRecordWhereInput */;
            };
          };
          isNot?: any /* circular reference to OrganizationWhereInput */;
        }
      | any /* circular reference to OrganizationWhereInput */;
  };
  orderBy?:
    | {
        org_event_id?: any;
        organization_id?: any;
        event_name?: any;
        start_time?: any;
        end_time?: any;
        location?: any;
        organization?: {
          organization_id?: any;
          name?: any;
          description?: any;
          created_on?: any;
          updated_on?: any;
          is_active?: any;
          events?: {
            _count?: any;
          };
          members?: {
            _count?: any;
          };
          records?: {
            _count?: any;
          };
        };
      }[]
    | any /* circular reference to OrgEventOrderByWithRelationInput */;
  cursor?: {
    org_event_id?: string;
    AND?: any /* circular reference to OrgEventWhereInput */;
    OR?: any /* circular reference to OrgEventWhereInput */;
    NOT?: any /* circular reference to OrgEventWhereInput */;
    organization_id?: any /* circular reference to StringFilter */ | string;
    event_name?: any /* circular reference to StringFilter */ | string;
    start_time?: any /* circular reference to DateTimeFilter */ | Date;
    end_time?: any;
    location?: any;
    organization?:
      | any /* circular reference to OrganizationRelationFilter */
      | any /* circular reference to OrganizationWhereInput */;
  };
  take?: number;
  skip?: number;
  distinct?: any;
}

import { z } from "zod";

export const OrgEventFindManyArgsSchema = z.object({
  where: z.any().optional(),
  orderBy: z.array(z.any()).optional(),
  cursor: z.any().optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.any().optional(),
});
