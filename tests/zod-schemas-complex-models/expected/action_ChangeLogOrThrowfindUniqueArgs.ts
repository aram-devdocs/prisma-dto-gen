// Auto-generated by prisma-dto-gen (refactored inline)

export interface ChangeLogOrThrowFindUniqueArgs {
  where: {
    change_log_id?: string;
    AND?:
      | {
          AND?: any /* circular reference to ChangeLogWhereInput */;
          OR?: any /* circular reference to ChangeLogWhereInput */;
          NOT?: any /* circular reference to ChangeLogWhereInput */;
          change_log_id?:
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
          applied_at?:
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
          description?: any /* circular reference to StringFilter */ | string;
        }
      | any /* circular reference to ChangeLogWhereInput */;
    OR?: any /* circular reference to ChangeLogWhereInput */;
    NOT?: any /* circular reference to ChangeLogWhereInput */;
    applied_at?: any /* circular reference to DateTimeFilter */ | Date;
    description?: any /* circular reference to StringFilter */ | string;
  };
}

import { z } from "zod";

export const ChangeLogOrThrowFindUniqueArgsSchema = z.object({
  where: z.any(),
});
