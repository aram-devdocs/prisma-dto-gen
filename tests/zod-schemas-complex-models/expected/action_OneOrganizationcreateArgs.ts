// Auto-generated by prisma-dto-gen (refactored inline)

export interface OneOrganizationCreateArgs {
  data:
    | {
        organization_id?: string;
        name: string;
        description?: any;
        created_on?: Date;
        updated_on?: any;
        is_active?: any;
        events?: {
          create?:
            | {
                org_event_id?: string;
                event_name: string;
                start_time: Date;
                end_time?: any;
                location?: any;
              }
            | any /* circular reference to OrgEventCreateWithoutOrganizationInput */
            | any /* circular reference to OrgEventUncheckedCreateWithoutOrganizationInput */;
          connectOrCreate?:
            | {
                where: {
                  org_event_id?: string;
                  AND?:
                    | {
                        AND?: any /* max depth reached */;
                        OR?: any /* max depth reached */;
                        NOT?: any /* max depth reached */;
                        org_event_id?: any /* max depth reached */;
                        organization_id?: any /* max depth reached */;
                        event_name?: any /* max depth reached */;
                        start_time?: any /* max depth reached */;
                        end_time?: any /* max depth reached */;
                        location?: any /* max depth reached */;
                        organization?: any /* max depth reached */;
                      }
                    | any /* circular reference to OrgEventWhereInput */;
                  OR?: any /* circular reference to OrgEventWhereInput */;
                  NOT?: any /* circular reference to OrgEventWhereInput */;
                  organization_id?:
                    | {
                        equals?: any /* max depth reached */;
                        in?: any /* max depth reached */;
                        notIn?: any /* max depth reached */;
                        lt?: any /* max depth reached */;
                        lte?: any /* max depth reached */;
                        gt?: any /* max depth reached */;
                        gte?: any /* max depth reached */;
                        contains?: any /* max depth reached */;
                        startsWith?: any /* max depth reached */;
                        endsWith?: any /* max depth reached */;
                        mode?: any /* max depth reached */;
                        not?: any /* max depth reached */;
                      }
                    | string;
                  event_name?: any /* circular reference to StringFilter */ | string;
                  start_time?:
                    | {
                        equals?: any /* max depth reached */;
                        in?: any /* max depth reached */;
                        notIn?: any /* max depth reached */;
                        lt?: any /* max depth reached */;
                        lte?: any /* max depth reached */;
                        gt?: any /* max depth reached */;
                        gte?: any /* max depth reached */;
                        not?: any /* max depth reached */;
                      }
                    | Date;
                  end_time?: any;
                  location?: any;
                  organization?:
                    | {
                        is?: any /* max depth reached */;
                        isNot?: any /* max depth reached */;
                      }
                    | {
                        AND?: any /* max depth reached */;
                        OR?: any /* max depth reached */;
                        NOT?: any /* max depth reached */;
                        organization_id?: any /* max depth reached */;
                        name?: any /* max depth reached */;
                        description?: any /* max depth reached */;
                        created_on?: any /* max depth reached */;
                        updated_on?: any /* max depth reached */;
                        is_active?: any /* max depth reached */;
                        events?: any /* max depth reached */;
                        members?: any /* max depth reached */;
                        records?: any /* max depth reached */;
                      };
                };
                create:
                  | any /* circular reference to OrgEventCreateWithoutOrganizationInput */
                  | any /* circular reference to OrgEventUncheckedCreateWithoutOrganizationInput */;
              }
            | any /* circular reference to OrgEventCreateOrConnectWithoutOrganizationInput */;
          createMany?: {
            data:
              | {
                  org_event_id?: string;
                  event_name: string;
                  start_time: Date;
                  end_time?: any;
                  location?: any;
                }
              | any /* circular reference to OrgEventCreateManyOrganizationInput */;
            skipDuplicates?: boolean;
          };
          connect?: any /* circular reference to OrgEventWhereUniqueInput */;
        };
        members?: {
          create?:
            | {
                membership_id?: string;
                joined_on?: Date;
                is_active?: any;
                user_profile: {
                  create?:
                    | {
                        profile_id?: any /* max depth reached */;
                        created_timestamp?: any /* max depth reached */;
                        updated_timestamp?: any /* max depth reached */;
                        deactivated?: any /* max depth reached */;
                        full_name: any /* max depth reached */;
                        email_address?: any /* max depth reached */;
                        phone_number?: any /* max depth reached */;
                        password_hash?: any /* max depth reached */;
                        account_level?: any /* max depth reached */;
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
                        payments?: any /* max depth reached */;
                      }
                    | {
                        profile_id?: any /* max depth reached */;
                        created_timestamp?: any /* max depth reached */;
                        updated_timestamp?: any /* max depth reached */;
                        deactivated?: any /* max depth reached */;
                        full_name: any /* max depth reached */;
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
                        profiles_created?: any /* max depth reached */;
                        threads_as_primary_participant?: any /* max depth reached */;
                        threads_as_secondary_participant?: any /* max depth reached */;
                        sent_messages?: any /* max depth reached */;
                        payments?: any /* max depth reached */;
                      };
                  connectOrCreate?: {
                    where: any /* max depth reached */;
                    create: any /* max depth reached */;
                  };
                  connect?: {
                    profile_id?: any /* max depth reached */;
                    email_address?: any /* max depth reached */;
                    AND?: any /* max depth reached */;
                    OR?: any /* max depth reached */;
                    NOT?: any /* max depth reached */;
                    created_timestamp?: any /* max depth reached */;
                    updated_timestamp?: any /* max depth reached */;
                    deactivated?: any /* max depth reached */;
                    full_name?: any /* max depth reached */;
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
                };
              }
            | any /* circular reference to OrgMembershipCreateWithoutOrganizationInput */
            | {
                membership_id?: string;
                profile_id: string;
                joined_on?: Date;
                is_active?: any;
              }
            | any /* circular reference to OrgMembershipUncheckedCreateWithoutOrganizationInput */;
          connectOrCreate?:
            | {
                where: {
                  membership_id?: string;
                  AND?:
                    | {
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
                      }
                    | any /* circular reference to OrgMembershipWhereInput */;
                  OR?: any /* circular reference to OrgMembershipWhereInput */;
                  NOT?: any /* circular reference to OrgMembershipWhereInput */;
                  organization_id?: any /* circular reference to StringFilter */ | string;
                  profile_id?: any /* circular reference to StringFilter */ | string;
                  joined_on?: any /* circular reference to DateTimeFilter */ | Date;
                  is_active?: any;
                  organization?:
                    | any /* circular reference to OrganizationRelationFilter */
                    | any /* circular reference to OrganizationWhereInput */;
                  user_profile?:
                    | {
                        is?: any /* max depth reached */;
                        isNot?: any /* max depth reached */;
                      }
                    | {
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
                };
                create:
                  | any /* circular reference to OrgMembershipCreateWithoutOrganizationInput */
                  | any /* circular reference to OrgMembershipUncheckedCreateWithoutOrganizationInput */;
              }
            | any /* circular reference to OrgMembershipCreateOrConnectWithoutOrganizationInput */;
          createMany?: {
            data:
              | {
                  membership_id?: string;
                  profile_id: string;
                  joined_on?: Date;
                  is_active?: any;
                }
              | any /* circular reference to OrgMembershipCreateManyOrganizationInput */;
            skipDuplicates?: boolean;
          };
          connect?: any /* circular reference to OrgMembershipWhereUniqueInput */;
        };
        records?: {
          create?:
            | {
                record_id?: string;
                title: string;
                details?: any;
                created_on?: Date;
                updated_on?: any;
              }
            | any /* circular reference to OrgRecordCreateWithoutOrganizationInput */
            | any /* circular reference to OrgRecordUncheckedCreateWithoutOrganizationInput */;
          connectOrCreate?:
            | {
                where: {
                  record_id?: string;
                  AND?:
                    | {
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
                      }
                    | any /* circular reference to OrgRecordWhereInput */;
                  OR?: any /* circular reference to OrgRecordWhereInput */;
                  NOT?: any /* circular reference to OrgRecordWhereInput */;
                  organization_id?: any /* circular reference to StringFilter */ | string;
                  title?: any /* circular reference to StringFilter */ | string;
                  details?: any;
                  created_on?: any /* circular reference to DateTimeFilter */ | Date;
                  updated_on?: any;
                  organization?:
                    | any /* circular reference to OrganizationRelationFilter */
                    | any /* circular reference to OrganizationWhereInput */;
                };
                create:
                  | any /* circular reference to OrgRecordCreateWithoutOrganizationInput */
                  | any /* circular reference to OrgRecordUncheckedCreateWithoutOrganizationInput */;
              }
            | any /* circular reference to OrgRecordCreateOrConnectWithoutOrganizationInput */;
          createMany?: {
            data:
              | {
                  record_id?: string;
                  title: string;
                  details?: any;
                  created_on?: Date;
                  updated_on?: any;
                }
              | any /* circular reference to OrgRecordCreateManyOrganizationInput */;
            skipDuplicates?: boolean;
          };
          connect?: any /* circular reference to OrgRecordWhereUniqueInput */;
        };
      }
    | {
        organization_id?: string;
        name: string;
        description?: any;
        created_on?: Date;
        updated_on?: any;
        is_active?: any;
        events?: {
          create?:
            | any /* circular reference to OrgEventCreateWithoutOrganizationInput */
            | any /* circular reference to OrgEventUncheckedCreateWithoutOrganizationInput */;
          connectOrCreate?: any /* circular reference to OrgEventCreateOrConnectWithoutOrganizationInput */;
          createMany?: any /* circular reference to OrgEventCreateManyOrganizationInputEnvelope */;
          connect?: any /* circular reference to OrgEventWhereUniqueInput */;
        };
        members?: {
          create?:
            | any /* circular reference to OrgMembershipCreateWithoutOrganizationInput */
            | any /* circular reference to OrgMembershipUncheckedCreateWithoutOrganizationInput */;
          connectOrCreate?: any /* circular reference to OrgMembershipCreateOrConnectWithoutOrganizationInput */;
          createMany?: any /* circular reference to OrgMembershipCreateManyOrganizationInputEnvelope */;
          connect?: any /* circular reference to OrgMembershipWhereUniqueInput */;
        };
        records?: {
          create?:
            | any /* circular reference to OrgRecordCreateWithoutOrganizationInput */
            | any /* circular reference to OrgRecordUncheckedCreateWithoutOrganizationInput */;
          connectOrCreate?: any /* circular reference to OrgRecordCreateOrConnectWithoutOrganizationInput */;
          createMany?: any /* circular reference to OrgRecordCreateManyOrganizationInputEnvelope */;
          connect?: any /* circular reference to OrgRecordWhereUniqueInput */;
        };
      };
}

import { z } from "zod";

export const OneOrganizationCreateArgsSchema = z.object({
  data: z.any(),
});
