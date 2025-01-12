// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserOrThrowFindUniqueArgs {
  where: {
    id?: number;
    password?: string;
    AND?:
      | {
          AND?: any /* circular reference to UserWhereInput */;
          OR?: any /* circular reference to UserWhereInput */;
          NOT?: any /* circular reference to UserWhereInput */;
          id?:
            | {
                equals?: any;
                in?: number[];
                notIn?: number[];
                lt?: any;
                lte?: any;
                gt?: any;
                gte?: any;
                not?:
                  | number
                  | {
                      equals?: any;
                      in?: number[];
                      notIn?: number[];
                      lt?: any;
                      lte?: any;
                      gt?: any;
                      gte?: any;
                      not?: number | any /* circular reference to NestedIntFilter */;
                    };
              }
            | number;
          name?:
            | {
                equals?: any;
                in?: string[];
                notIn?: string[];
                lt?: any;
                lte?: any;
                gt?: any;
                gte?: any;
                contains?: any;
                startsWith?: any;
                endsWith?: any;
                not?:
                  | string
                  | {
                      equals?: any;
                      in?: string[];
                      notIn?: string[];
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
          email?: any /* circular reference to StringFilter */ | string;
          age?: any;
          isFoo?:
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
          password?: any /* circular reference to StringFilter */ | string;
          createdAt?:
            | {
                equals?: any;
                in?: Date[];
                notIn?: Date[];
                lt?: any;
                lte?: any;
                gt?: any;
                gte?: any;
                not?:
                  | Date
                  | {
                      equals?: any;
                      in?: Date[];
                      notIn?: Date[];
                      lt?: any;
                      lte?: any;
                      gt?: any;
                      gte?: any;
                      not?: Date | any /* circular reference to NestedDateTimeFilter */;
                    };
              }
            | Date;
          updatedAt?: any /* circular reference to DateTimeFilter */ | Date;
        }
      | any /* circular reference to UserWhereInput */;
    OR?: any /* circular reference to UserWhereInput */;
    NOT?: any /* circular reference to UserWhereInput */;
    name?: any /* circular reference to StringFilter */ | string;
    email?: any /* circular reference to StringFilter */ | string;
    age?: any;
    isFoo?: any /* circular reference to BoolFilter */ | boolean;
    createdAt?: any /* circular reference to DateTimeFilter */ | Date;
    updatedAt?: any /* circular reference to DateTimeFilter */ | Date;
  };
}

import { z } from "zod";

export const UserOrThrowFindUniqueArgsSchema = z.object({
  where: z.any(),
});
