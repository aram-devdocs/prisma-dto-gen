// Auto-generated by prisma-dto-gen (refactored inline)

export interface DateTimeFieldUpdateOperationsInput {
  set?: Date;
}

import { z } from "zod";

export const DateTimeFieldUpdateOperationsInputSchema = z.object({
  set: z.date().optional(),
});
