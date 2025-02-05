// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserDocumentMaxAggregateOutputTypeOutput {
  document_id: string;
  owner_profile_id: string;
  title: string;
  content: string;
  status: "DRAFT" | "REVIEW" | "PUBLISHED" | "ARCHIVED";
  created_at: Date;
  updated_at: Date;
  archived: boolean;
}

import { z } from "zod";

export const UserDocumentMaxAggregateOutputTypeOutputSchema = z.object({
  document_id: z.string().nullable(),
  owner_profile_id: z.string().nullable(),
  title: z.string().nullable(),
  content: z.string().nullable(),
  status: z.enum(["DRAFT", "REVIEW", "PUBLISHED", "ARCHIVED"]).nullable(),
  created_at: z.date().nullable(),
  updated_at: z.date().nullable(),
  archived: z.boolean().nullable(),
});
