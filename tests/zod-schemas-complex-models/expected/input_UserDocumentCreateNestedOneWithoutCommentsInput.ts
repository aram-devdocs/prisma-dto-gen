// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserDocumentCreateNestedOneWithoutCommentsInput {
  create?: any;
  connectOrCreate?: any;
  connect?: any;
}

import { z } from "zod";

export const UserDocumentCreateNestedOneWithoutCommentsInputSchema = z.object({
  create: z.any().optional(),
  connectOrCreate: z.any().optional(),
  connect: z.any().optional(),
});
