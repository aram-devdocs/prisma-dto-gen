// Auto-generated by prisma-dto-gen (refactored inline)

export interface EnumTwoStepVerificationTypeFieldUpdateOperationsInput {
  set: "EMAIL" | "SMS" | "PUSH";
}

import { z } from "zod";

export const EnumTwoStepVerificationTypeFieldUpdateOperationsInputSchema = z.object({
  set: z.enum(["EMAIL", "SMS", "PUSH"]),
});
