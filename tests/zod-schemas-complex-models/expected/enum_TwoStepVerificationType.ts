// Auto-generated by prisma-dto-gen (refactored inline)

export type TwoStepVerificationType = "EMAIL" | "SMS" | "PUSH";

import { z } from "zod";

export const TwoStepVerificationTypeSchema = z.enum(["EMAIL", "SMS", "PUSH"]);