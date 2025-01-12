// Auto-generated by prisma-dto-gen (refactored inline)

export interface ThreadMessageFindUniqueArgs {
  where: {
    message_id?: string;
    AND?:
      | {
          AND?: any /* circular reference to ThreadMessageWhereInput */;
          OR?: any /* circular reference to ThreadMessageWhereInput */;
          NOT?: any /* circular reference to ThreadMessageWhereInput */;
          message_id?:
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
          thread_id?: any /* circular reference to StringFilter */ | string;
          sender_id?: any /* circular reference to StringFilter */ | string;
          content?: any /* circular reference to StringFilter */ | string;
          sent_at?:
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
          updated_at?: any;
          is_archived?: any;
          discussion_thread?:
            | {
                is?: {
                  AND?: any /* circular reference to DiscussionThreadWhereInput */;
                  OR?: any /* circular reference to DiscussionThreadWhereInput */;
                  NOT?: any /* circular reference to DiscussionThreadWhereInput */;
                  thread_id?: any /* circular reference to StringFilter */ | string;
                  primary_participant?: any /* circular reference to StringFilter */ | string;
                  secondary_participant?: any;
                  created_on?: any /* circular reference to DateTimeFilter */ | Date;
                  closed_on?: any;
                  is_flagged?: any;
                  flagged_reason?: any;
                  participant_one?:
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
                  participant_two?: any;
                  messages?: {
                    every?: any /* max depth reached */;
                    some?: any /* max depth reached */;
                    none?: any /* max depth reached */;
                  };
                };
                isNot?: any /* circular reference to DiscussionThreadWhereInput */;
              }
            | any /* circular reference to DiscussionThreadWhereInput */;
          sender?:
            | any /* circular reference to UserProfileRelationFilter */
            | any /* circular reference to UserProfileWhereInput */;
        }
      | any /* circular reference to ThreadMessageWhereInput */;
    OR?: any /* circular reference to ThreadMessageWhereInput */;
    NOT?: any /* circular reference to ThreadMessageWhereInput */;
    thread_id?: any /* circular reference to StringFilter */ | string;
    sender_id?: any /* circular reference to StringFilter */ | string;
    content?: any /* circular reference to StringFilter */ | string;
    sent_at?: any /* circular reference to DateTimeFilter */ | Date;
    updated_at?: any;
    is_archived?: any;
    discussion_thread?:
      | any /* circular reference to DiscussionThreadRelationFilter */
      | any /* circular reference to DiscussionThreadWhereInput */;
    sender?:
      | any /* circular reference to UserProfileRelationFilter */
      | any /* circular reference to UserProfileWhereInput */;
  };
}

import { z } from "zod";

export const ThreadMessageFindUniqueArgsSchema = z.object({
  where: z.any(),
});
