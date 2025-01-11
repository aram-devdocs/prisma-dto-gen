// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserDocumentCreateInput {
  document_id: string;
  title: string;
  content: string;
  status: "DRAFT" | "REVIEW" | "PUBLISHED" | "ARCHIVED";
  created_at: Date;
  updated_at?: any;
  archived?: any;
  user_profile: any;
  comments: any;
}

import { z } from "zod";

export const UserDocumentCreateInputSchema = z.object({
  document_id: z.string(),
  title: z.string(),
  content: z.string(),
  status: z.enum(["DRAFT", "REVIEW", "PUBLISHED", "ARCHIVED"]),
  created_at: z.date(),
  updated_at: z.date().optional(),
  archived: z.boolean().optional(),
  user_profile: z.any(),
  comments: z.any(),
});
