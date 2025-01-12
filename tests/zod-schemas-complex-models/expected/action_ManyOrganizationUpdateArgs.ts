// Auto-generated by prisma-dto-gen (refactored inline)

export interface ManyOrganizationUpdateArgs {
  data:
    | {
        organization_id?:
          | string
          | {
              set?: string;
            };
        name?: string | any /* circular reference to StringFieldUpdateOperationsInput */;
        description?: any;
        created_on?:
          | Date
          | {
              set?: Date;
            };
        updated_on?: any;
        is_active?: any;
      }
    | {
        organization_id?: string | any /* circular reference to StringFieldUpdateOperationsInput */;
        name?: string | any /* circular reference to StringFieldUpdateOperationsInput */;
        description?: any;
        created_on?: Date | any /* circular reference to DateTimeFieldUpdateOperationsInput */;
        updated_on?: any;
        is_active?: any;
      };
  where?: {
    AND?: any /* circular reference to OrganizationWhereInput */;
    OR?: any /* circular reference to OrganizationWhereInput */;
    NOT?: any /* circular reference to OrganizationWhereInput */;
    organization_id?:
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
    name?: any /* circular reference to StringFilter */ | string;
    description?: any;
    created_on?:
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
    updated_on?: any;
    is_active?: any;
    events?: {
      every?: {
        AND?: any /* circular reference to OrgEventWhereInput */;
        OR?: any /* circular reference to OrgEventWhereInput */;
        NOT?: any /* circular reference to OrgEventWhereInput */;
        org_event_id?: any /* circular reference to StringFilter */ | string;
        organization_id?: any /* circular reference to StringFilter */ | string;
        event_name?: any /* circular reference to StringFilter */ | string;
        start_time?: any /* circular reference to DateTimeFilter */ | Date;
        end_time?: any;
        location?: any;
        organization?:
          | {
              is?: any /* circular reference to OrganizationWhereInput */;
              isNot?: any /* circular reference to OrganizationWhereInput */;
            }
          | any /* circular reference to OrganizationWhereInput */;
      };
      some?: any /* circular reference to OrgEventWhereInput */;
      none?: any /* circular reference to OrgEventWhereInput */;
    };
    members?: {
      every?: {
        AND?: any /* circular reference to OrgMembershipWhereInput */;
        OR?: any /* circular reference to OrgMembershipWhereInput */;
        NOT?: any /* circular reference to OrgMembershipWhereInput */;
        membership_id?: any /* circular reference to StringFilter */ | string;
        organization_id?: any /* circular reference to StringFilter */ | string;
        profile_id?: any /* circular reference to StringFilter */ | string;
        joined_on?: any /* circular reference to DateTimeFilter */ | Date;
        is_active?: any;
        organization?:
          | any /* circular reference to OrganizationRelationFilter */
          | any /* circular reference to OrganizationWhereInput */;
        user_profile?:
          | {
              is?: {
                AND?: any /* max depth reached */;
                OR?: any /* max depth reached */;
                NOT?: any /* max depth reached */;
                profile_id?: any /* max depth reached */;
                created_timestamp?: any /* max depth reached */;
                updated_timestamp?: any /* max depth reached */;
                deactivated?: any /* max depth reached */;
                full_name?: any /* max depth reached */;
                email_address?: any /* max depth reached */;
                phone_number?: any /* max depth reached */;
                password_hash?: any /* max depth reached */;
                account_level?: any /* max depth reached */;
                created_by_id?: any /* max depth reached */;
                user_documents?: any /* max depth reached */;
                user_notifications?: any /* max depth reached */;
                user_accounts?: any /* max depth reached */;
                user_two_step_codes?: any /* max depth reached */;
                user_comments?: any /* max depth reached */;
                created_by_profile?: any /* max depth reached */;
                profiles_created?: any /* max depth reached */;
                threads_as_primary_participant?: any /* max depth reached */;
                threads_as_secondary_participant?: any /* max depth reached */;
                sent_messages?: any /* max depth reached */;
                org_memberships?: any /* max depth reached */;
                payments?: any /* max depth reached */;
              };
              isNot?: any /* circular reference to UserProfileWhereInput */;
            }
          | any /* circular reference to UserProfileWhereInput */;
      };
      some?: any /* circular reference to OrgMembershipWhereInput */;
      none?: any /* circular reference to OrgMembershipWhereInput */;
    };
    records?: {
      every?: {
        AND?: any /* circular reference to OrgRecordWhereInput */;
        OR?: any /* circular reference to OrgRecordWhereInput */;
        NOT?: any /* circular reference to OrgRecordWhereInput */;
        record_id?: any /* circular reference to StringFilter */ | string;
        organization_id?: any /* circular reference to StringFilter */ | string;
        title?: any /* circular reference to StringFilter */ | string;
        details?: any;
        created_on?: any /* circular reference to DateTimeFilter */ | Date;
        updated_on?: any;
        organization?:
          | any /* circular reference to OrganizationRelationFilter */
          | any /* circular reference to OrganizationWhereInput */;
      };
      some?: any /* circular reference to OrgRecordWhereInput */;
      none?: any /* circular reference to OrgRecordWhereInput */;
    };
  };
}

import { z } from "zod";

export const ManyOrganizationUpdateArgsSchema = z.object({
  data: z.any(),
  where: z.any().optional(),
});