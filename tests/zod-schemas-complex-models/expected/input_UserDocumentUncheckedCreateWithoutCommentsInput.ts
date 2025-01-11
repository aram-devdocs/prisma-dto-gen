// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserDocumentUncheckedCreateWithoutCommentsInput {
  document_id: string;
  owner_profile_id: string;
  title: string;
  content: string;
  status: "DRAFT" | "REVIEW" | "PUBLISHED" | "ARCHIVED";
  created_at: Date;
  updated_at?: any;
  archived?: any;
}

import { z } from "zod";

export const UserDocumentUncheckedCreateWithoutCommentsInputSchema = z.object({
  document_id: z.string(),
  owner_profile_id: z.string(),
  title: z.string(),
  content: z.string(),
  status: z.enum(["DRAFT", "REVIEW", "PUBLISHED", "ARCHIVED"]),
  created_at: z.date(),
  updated_at: z.date().optional(),
  archived: z.boolean().optional(),
});
