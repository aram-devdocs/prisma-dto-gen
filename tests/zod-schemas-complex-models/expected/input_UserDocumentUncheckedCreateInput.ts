// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserDocumentUncheckedCreateInput {
  document_id?: string;
  owner_profile_id: string;
  title: string;
  content: string;
  status?: "DRAFT" | "REVIEW" | "PUBLISHED" | "ARCHIVED";
  created_at?: Date;
  updated_at?: any;
  archived?: any;
  comments?: any;
}

import { z } from "zod";

export const UserDocumentUncheckedCreateInputSchema = z.object({
  document_id: z.string().optional(),
  owner_profile_id: z.string(),
  title: z.string(),
  content: z.string(),
  status: z.enum(["DRAFT", "REVIEW", "PUBLISHED", "ARCHIVED"]).optional(),
  created_at: z.date().optional(),
  updated_at: z.date().nullable().optional(),
  archived: z.boolean().nullable().optional(),
  comments: z.any().optional(),
});
