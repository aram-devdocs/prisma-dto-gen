// Auto-generated by prisma-dto-gen (refactored inline)

export interface NullableDateTimeFieldUpdateOperationsInput {
  set?: any;
}

import { z } from "zod";

export const NullableDateTimeFieldUpdateOperationsInputSchema = z.object({
  set: z.date().nullable().optional(),
});
