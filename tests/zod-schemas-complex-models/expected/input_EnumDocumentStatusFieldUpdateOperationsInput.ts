// Auto-generated by prisma-dto-gen (refactored inline)

export interface EnumDocumentStatusFieldUpdateOperationsInput {
  set: "DRAFT" | "REVIEW" | "PUBLISHED" | "ARCHIVED";
}

import { z } from "zod";

export const EnumDocumentStatusFieldUpdateOperationsInputSchema = z.object({
  set: z.enum(["DRAFT", "REVIEW", "PUBLISHED", "ARCHIVED"]),
});
