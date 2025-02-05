// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserDocumentMaxOrderByAggregateInput {
  document_id?: any;
  owner_profile_id?: any;
  title?: any;
  content?: any;
  status?: any;
  created_at?: any;
  updated_at?: any;
  archived?: any;
}

import { z } from "zod";

export const UserDocumentMaxOrderByAggregateInputSchema = z.object({
  document_id: z.any().optional(),
  owner_profile_id: z.any().optional(),
  title: z.any().optional(),
  content: z.any().optional(),
  status: z.any().optional(),
  created_at: z.any().optional(),
  updated_at: z.any().optional(),
  archived: z.any().optional(),
});
