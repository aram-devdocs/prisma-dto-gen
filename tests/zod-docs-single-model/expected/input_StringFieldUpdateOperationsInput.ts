// Auto-generated by prisma-dto-gen (refactored inline)

export interface StringFieldUpdateOperationsInput {
  set?: string;
}

import { z } from "zod";

export const StringFieldUpdateOperationsInputSchema = z.object({
  set: z.string().optional(),
});
