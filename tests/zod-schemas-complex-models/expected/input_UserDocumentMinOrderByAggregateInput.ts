// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserDocumentMinOrderByAggregateInput {
  document_id: any;
  owner_profile_id: any;
  title: any;
  content: any;
  status: any;
  created_at: any;
  updated_at: any;
  archived: any;
}

import { z } from "zod";

export const UserDocumentMinOrderByAggregateInputSchema = z.object({
  document_id: z.any(),
  owner_profile_id: z.any(),
  title: z.any(),
  content: z.any(),
  status: z.any(),
  created_at: z.any(),
  updated_at: z.any(),
  archived: z.any(),
});
