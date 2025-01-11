// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserDocumentUncheckedUpdateInput {
  document_id: any;
  owner_profile_id: any;
  title: any;
  content: any;
  status: any;
  created_at: any;
  updated_at?: any | null;
  archived?: any | null;
  comments: any;
}

import { z } from "zod";

export const UserDocumentUncheckedUpdateInputSchema = z.object({
  document_id: z.string(),
  owner_profile_id: z.string(),
  title: z.string(),
  content: z.string(),
  status: z.enum(["DRAFT", "REVIEW", "PUBLISHED", "ARCHIVED"]),
  created_at: z.date(),
  updated_at: z.date().nullable(),
  archived: z.boolean().nullable(),
  comments: z.any(),
});
