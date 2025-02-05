// Auto-generated by prisma-dto-gen (refactored inline)

export interface ManyUserUpdateArgs {
  data:
    | {
        name?:
          | string
          | {
              set?: string;
            };
        email?: string | any /* circular reference to StringFieldUpdateOperationsInput */;
      }
    | {
        id?:
          | number
          | {
              set?: number;
              increment?: number;
              decrement?: number;
              multiply?: number;
              divide?: number;
            };
        name?: string | any /* circular reference to StringFieldUpdateOperationsInput */;
        email?: string | any /* circular reference to StringFieldUpdateOperationsInput */;
      };
  where?: {
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
  };
}

import { z } from "zod";

export const ManyUserUpdateArgsSchema = z.object({
  data: z.any(),
  where: z.any().optional(),
});
