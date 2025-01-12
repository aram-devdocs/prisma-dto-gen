// Auto-generated by prisma-dto-gen (refactored inline)

export interface OneOrgRecordUpsertArgs {
  where: {
    record_id?: string;
    AND?:
      | {
          AND?: any /* circular reference to OrgRecordWhereInput */;
          OR?: any /* circular reference to OrgRecordWhereInput */;
          NOT?: any /* circular reference to OrgRecordWhereInput */;
          record_id?:
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
          title?: any /* circular reference to StringFilter */ | string;
          details?: any;
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
                    every?: any /* max depth reached */;
                    some?: any /* max depth reached */;
                    none?: any /* max depth reached */;
                  };
                  members?: {
                    every?: any /* max depth reached */;
                    some?: any /* max depth reached */;
                    none?: any /* max depth reached */;
                  };
                  records?: {
                    every?: any /* max depth reached */;
                    some?: any /* max depth reached */;
                    none?: any /* max depth reached */;
                  };
                };
                isNot?: any /* circular reference to OrganizationWhereInput */;
              }
            | any /* circular reference to OrganizationWhereInput */;
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
    | {
        record_id?: string;
        title: string;
        details?: any;
        created_on?: Date;
        updated_on?: any;
        organization: {
          create?:
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
                        org_event_id?: any /* max depth reached */;
                        event_name: any /* max depth reached */;
                        start_time: any /* max depth reached */;
                        end_time?: any /* max depth reached */;
                        location?: any /* max depth reached */;
                      }
                    | any /* circular reference to OrgEventCreateWithoutOrganizationInput */
                    | any /* circular reference to OrgEventUncheckedCreateWithoutOrganizationInput */;
                  connectOrCreate?:
                    | {
                        where: any /* max depth reached */;
                        create: any /* max depth reached */;
                      }
                    | any /* circular reference to OrgEventCreateOrConnectWithoutOrganizationInput */;
                  createMany?: {
                    data: any /* max depth reached */;
                    skipDuplicates?: any /* max depth reached */;
                  };
                  connect?:
                    | {
                        org_event_id?: any /* max depth reached */;
                        AND?: any /* max depth reached */;
                        OR?: any /* max depth reached */;
                        NOT?: any /* max depth reached */;
                        organization_id?: any /* max depth reached */;
                        event_name?: any /* max depth reached */;
                        start_time?: any /* max depth reached */;
                        end_time?: any /* max depth reached */;
                        location?: any /* max depth reached */;
                        organization?: any /* max depth reached */;
                      }
                    | any /* circular reference to OrgEventWhereUniqueInput */;
                };
                members?: {
                  create?:
                    | {
                        membership_id?: any /* max depth reached */;
                        joined_on?: any /* max depth reached */;
                        is_active?: any /* max depth reached */;
                        user_profile: any /* max depth reached */;
                      }
                    | any /* circular reference to OrgMembershipCreateWithoutOrganizationInput */
                    | {
                        membership_id?: any /* max depth reached */;
                        profile_id: any /* max depth reached */;
                        joined_on?: any /* max depth reached */;
                        is_active?: any /* max depth reached */;
                      }
                    | any /* circular reference to OrgMembershipUncheckedCreateWithoutOrganizationInput */;
                  connectOrCreate?:
                    | {
                        where: any /* max depth reached */;
                        create: any /* max depth reached */;
                      }
                    | any /* circular reference to OrgMembershipCreateOrConnectWithoutOrganizationInput */;
                  createMany?: {
                    data: any /* max depth reached */;
                    skipDuplicates?: any /* max depth reached */;
                  };
                  connect?:
                    | {
                        membership_id?: any /* max depth reached */;
                        AND?: any /* max depth reached */;
                        OR?: any /* max depth reached */;
                        NOT?: any /* max depth reached */;
                        organization_id?: any /* max depth reached */;
                        profile_id?: any /* max depth reached */;
                        joined_on?: any /* max depth reached */;
                        is_active?: any /* max depth reached */;
                        organization?: any /* max depth reached */;
                        user_profile?: any /* max depth reached */;
                      }
                    | any /* circular reference to OrgMembershipWhereUniqueInput */;
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
              };
          connectOrCreate?: {
            where: {
              organization_id?: string;
              AND?: any /* circular reference to OrganizationWhereInput */;
              OR?: any /* circular reference to OrganizationWhereInput */;
              NOT?: any /* circular reference to OrganizationWhereInput */;
              name?: any /* circular reference to StringFilter */ | string;
              description?: any;
              created_on?: any /* circular reference to DateTimeFilter */ | Date;
              updated_on?: any;
              is_active?: any;
              events?: any /* circular reference to OrgEventListRelationFilter */;
              members?: any /* circular reference to OrgMembershipListRelationFilter */;
              records?: any /* circular reference to OrgRecordListRelationFilter */;
            };
            create:
              | any /* circular reference to OrganizationCreateWithoutRecordsInput */
              | any /* circular reference to OrganizationUncheckedCreateWithoutRecordsInput */;
          };
          connect?: any /* circular reference to OrganizationWhereUniqueInput */;
        };
      }
    | {
        record_id?: string;
        organization_id: string;
        title: string;
        details?: any;
        created_on?: Date;
        updated_on?: any;
      };
  update:
    | {
        record_id?:
          | string
          | {
              set?: string;
            };
        title?: string | any /* circular reference to StringFieldUpdateOperationsInput */;
        details?: any;
        created_on?:
          | Date
          | {
              set?: Date;
            };
        updated_on?: any;
        organization?: {
          create?:
            | any /* circular reference to OrganizationCreateWithoutRecordsInput */
            | any /* circular reference to OrganizationUncheckedCreateWithoutRecordsInput */;
          connectOrCreate?: any /* circular reference to OrganizationCreateOrConnectWithoutRecordsInput */;
          upsert?: {
            update: {
              organization_id?:
                | string
                | any /* circular reference to StringFieldUpdateOperationsInput */;
              name?: string | any /* circular reference to StringFieldUpdateOperationsInput */;
              description?: any;
              created_on?:
                | Date
                | any /* circular reference to DateTimeFieldUpdateOperationsInput */;
              updated_on?: any;
              is_active?: any;
              events?: {
                create?: any /* max depth reached */;
                connectOrCreate?: any /* max depth reached */;
                upsert?: any /* max depth reached */;
                createMany?: any /* max depth reached */;
                set?: any /* max depth reached */;
                disconnect?: any /* max depth reached */;
                delete?: any /* max depth reached */;
                connect?: any /* max depth reached */;
                update?: any /* max depth reached */;
                updateMany?: any /* max depth reached */;
                deleteMany?: any /* max depth reached */;
              };
              members?: {
                create?: any /* max depth reached */;
                connectOrCreate?: any /* max depth reached */;
                upsert?: any /* max depth reached */;
                createMany?: any /* max depth reached */;
                set?: any /* max depth reached */;
                disconnect?: any /* max depth reached */;
                delete?: any /* max depth reached */;
                connect?: any /* max depth reached */;
                update?: any /* max depth reached */;
                updateMany?: any /* max depth reached */;
                deleteMany?: any /* max depth reached */;
              };
            };
            create:
              | any /* circular reference to OrganizationCreateWithoutRecordsInput */
              | any /* circular reference to OrganizationUncheckedCreateWithoutRecordsInput */;
            where?: any /* circular reference to OrganizationWhereInput */;
          };
          connect?: any /* circular reference to OrganizationWhereUniqueInput */;
          update?:
            | {
                where?: any /* circular reference to OrganizationWhereInput */;
                data:
                  | any /* circular reference to OrganizationUpdateWithoutRecordsInput */
                  | any /* circular reference to OrganizationUncheckedUpdateWithoutRecordsInput */;
              }
            | any /* circular reference to OrganizationUpdateWithoutRecordsInput */
            | any /* circular reference to OrganizationUncheckedUpdateWithoutRecordsInput */;
        };
      }
    | {
        record_id?: string | any /* circular reference to StringFieldUpdateOperationsInput */;
        organization_id?: string | any /* circular reference to StringFieldUpdateOperationsInput */;
        title?: string | any /* circular reference to StringFieldUpdateOperationsInput */;
        details?: any;
        created_on?: Date | any /* circular reference to DateTimeFieldUpdateOperationsInput */;
        updated_on?: any;
      };
}

import { z } from "zod";

export const OneOrgRecordUpsertArgsSchema = z.object({
  where: z.any(),
  create: z.any(),
  update: z.any(),
});