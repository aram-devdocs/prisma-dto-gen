// Auto-generated by prisma-dto-gen (refactored inline)

export interface NullableStringFieldUpdateOperationsInput {
  set?: any | null;
}

import { z } from "zod";

export const NullableStringFieldUpdateOperationsInputSchema = z.object({
  set: z.string().nullable(),
});
