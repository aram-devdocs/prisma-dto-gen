// Auto-generated by prisma-dto-gen (refactored inline)

export interface OneTwoStepVerificationDeleteArgs {
  where: {
    verification_id?: string;
    AND?:
      | {
          AND?: any /* circular reference to TwoStepVerificationWhereInput */;
          OR?: any /* circular reference to TwoStepVerificationWhereInput */;
          NOT?: any /* circular reference to TwoStepVerificationWhereInput */;
          verification_id?:
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
          profile_id?: any /* circular reference to StringFilter */ | string;
          code?: any;
          is_verified?:
            | {
                equals?: any;
                not?:
                  | boolean
                  | {
                      equals?: any;
                      not?: boolean | any /* circular reference to NestedBoolFilter */;
                    };
              }
            | boolean;
          created_at?:
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
          verification_type?:
            | {
                equals?: any;
                in?: any;
                notIn?: any;
                not?:
                  | "EMAIL"
                  | "SMS"
                  | "PUSH"
                  | {
                      equals?: any;
                      in?: any;
                      notIn?: any;
                      not?:
                        | "EMAIL"
                        | "SMS"
                        | "PUSH"
                        | any /* circular reference to NestedEnumTwoStepVerificationTypeFilter */;
                    };
              }
            | "EMAIL"
            | "SMS"
            | "PUSH";
          user_profile?:
            | {
                is?: {
                  AND?: any /* circular reference to UserProfileWhereInput */;
                  OR?: any /* circular reference to UserProfileWhereInput */;
                  NOT?: any /* circular reference to UserProfileWhereInput */;
                  profile_id?: any /* circular reference to StringFilter */ | string;
                  created_timestamp?: any /* circular reference to DateTimeFilter */ | Date;
                  updated_timestamp?: any;
                  deactivated?: any;
                  full_name?: any /* circular reference to StringFilter */ | string;
                  email_address?: any;
                  phone_number?: any;
                  password_hash?: any;
                  account_level?: any;
                  created_by_id?: any;
                  user_documents?: {
                    every?: any /* max depth reached */;
                    some?: any /* max depth reached */;
                    none?: any /* max depth reached */;
                  };
                  user_notifications?: {
                    every?: any /* max depth reached */;
                    some?: any /* max depth reached */;
                    none?: any /* max depth reached */;
                  };
                  user_accounts?: {
                    every?: any /* max depth reached */;
                    some?: any /* max depth reached */;
                    none?: any /* max depth reached */;
                  };
                  user_two_step_codes?: {
                    every?: any /* max depth reached */;
                    some?: any /* max depth reached */;
                    none?: any /* max depth reached */;
                  };
                  user_comments?: {
                    every?: any /* max depth reached */;
                    some?: any /* max depth reached */;
                    none?: any /* max depth reached */;
                  };
                  created_by_profile?: any;
                  profiles_created?: {
                    every?: any /* max depth reached */;
                    some?: any /* max depth reached */;
                    none?: any /* max depth reached */;
                  };
                  threads_as_primary_participant?: {
                    every?: any /* max depth reached */;
                    some?: any /* max depth reached */;
                    none?: any /* max depth reached */;
                  };
                  threads_as_secondary_participant?: any /* circular reference to DiscussionThreadListRelationFilter */;
                  sent_messages?: {
                    every?: any /* max depth reached */;
                    some?: any /* max depth reached */;
                    none?: any /* max depth reached */;
                  };
                  org_memberships?: {
                    every?: any /* max depth reached */;
                    some?: any /* max depth reached */;
                    none?: any /* max depth reached */;
                  };
                  payments?: {
                    every?: any /* max depth reached */;
                    some?: any /* max depth reached */;
                    none?: any /* max depth reached */;
                  };
                };
                isNot?: any /* circular reference to UserProfileWhereInput */;
              }
            | any /* circular reference to UserProfileWhereInput */;
        }
      | any /* circular reference to TwoStepVerificationWhereInput */;
    OR?: any /* circular reference to TwoStepVerificationWhereInput */;
    NOT?: any /* circular reference to TwoStepVerificationWhereInput */;
    profile_id?: any /* circular reference to StringFilter */ | string;
    code?: any;
    is_verified?: any /* circular reference to BoolFilter */ | boolean;
    created_at?: any /* circular reference to DateTimeFilter */ | Date;
    verification_type?:
      | any /* circular reference to EnumTwoStepVerificationTypeFilter */
      | "EMAIL"
      | "SMS"
      | "PUSH";
    user_profile?:
      | any /* circular reference to UserProfileRelationFilter */
      | any /* circular reference to UserProfileWhereInput */;
  };
}

import { z } from "zod";

export const OneTwoStepVerificationDeleteArgsSchema = z.object({
  where: z.any(),
});
