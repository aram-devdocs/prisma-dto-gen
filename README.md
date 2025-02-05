# Prisma DTO Generator

This repository is an evolution of code originally written by [Morgan Zolob](https://github.com/mogzol/prisma-generator-typescript-interfaces), with significant inspiration from [Chris Hoermann](https://github.com/chrishoermann/zod-prisma-types). I've expanded upon their brilliant work to build a more comprehensive tool that generates not only zero-dependency TypeScript interfaces for your Prisma models (including inputTypes and outputTypes) but also lightweight Zod schemas (in progress).

---

**Disclaimer**  
This project is still in early development. Use it at your own risk until a production-ready release is made.

## Prisma Version Support

This project has been built and tested with Prisma 5.x.x. It has not yet been tested with Prisma 6.x.x. While we expect most functionality to remain compatible, please report any issues you encounter with newer Prisma versions.

## Why This Project?

Modern IDEs can bog down or fail entirely when faced with the complexity of Prisma’s built-in types (especially for large schemas). This can disrupt developer productivity, particularly in monorepo setups or front-end frameworks handling heavy schema validations.  
By generating simpler, standalone DTOs, we can improve type-check performance, reduce Intricate type collisions, and keep developer workflows snappy. Additionally, flattening relationships by appending “\_id” (instead of deeply nesting objects) ensures a more straightforward schema that many front-end and validation libraries handle gracefully.

## Installation\*

\*Note: This package is not yet published to npm. You can install it directly from GitHub:

### Pre-Release Install

```bash
npm install --save-dev github:prisma-dto-gen/prisma-dto-gen
```

### (IN Progress) Production Install

```bash
npm install --save-dev prisma-dto-gen
```

Then, in your Prisma schema (e.g., prisma/schema.prisma):

```prisma
generator dto {
  provider = "prisma-dto-gen"
}
```

Finally, run:

```bash
npx prisma generate
```

## Examples

Check out the `/examples` folder in the repository to see working implementations:

- `hello_world`: A basic Express server demonstrating type validation with generated DTOs
  - Shows how to use generated DTOs for type validation in an Express server

## Features

• Generates zero-dependency TypeScript definitions for models, enums, composite types, input types, and output types
• Optional Zod schema generation for runtime validation
• Smart depth handling - unlimited by default, but caps model action types at depth 5 (configurable) to prevent excessive nesting
• Inline model generation for relationships (instead of \_id appending)
• Matching isRequired and isNullable to provide verbose type definitions
• Creates a structured folder output (by default ./generated) to keep your DTOs organized
• Header comments, Prettier support, and optional config for each aspect

## Current Limitations

• Some complex relationships currently resolve to `any` types in TypeScript and `z.any()` in Zod schemas
• Circular references in models are still being optimized
• Work in progress to improve type safety in generated input/output types

## Example Generated Output

Here's a simple example of what gets generated for a User model:

```typescript
// Simple User Model
// Auto-generated by prisma-dto-gen (refactored inline)

export interface User {
  id: number;
  name: string;
  email: string;
  age?: number | null;
  isFoo: boolean;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

import { z } from "zod";

export const UserSchema = z.object({
  id: z.number(),
  name: z.string().min(1).max(100),
  email: z.string().email(),
  age: z.number().int().min(0).max(120).nullable(),
  isFoo: z.boolean(),
  password: z
    .string()
    .min(8)
    .max(32)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/)
    .describe(
      "Password must be 8-32 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
    ),
  createdAt: z.date(),
  updatedAt: z.date(),
});

// Complex User Model// Auto-generated by prisma-dto-gen (refactored inline)

type Decimal = { valueOf(): string };

export interface UserProfile {
  profile_id: string;
  created_timestamp: Date;
  updated_timestamp?: Date | null;
  deactivated?: boolean | null;
  full_name: string;
  email_address?: string | null;
  phone_number?: string | null;
  password_hash?: string | null;
  account_level?: "BASIC" | "PREMIUM" | "ADMIN" | null;
  user_documents: {
    document_id: string;
    owner_profile_id: string;
    title: string;
    content: string;
    status: "DRAFT" | "REVIEW" | "PUBLISHED" | "ARCHIVED";
    created_at: Date;
    updated_at?: Date | null;
    archived?: boolean | null;
    user_profile: any /* circular reference to UserProfile */;
    comments: {
      comment_id: string;
      document_id: string;
      commenter_id: string;
      text: string;
      created_at: Date;
      edited_at?: Date | null;
      is_deleted?: boolean | null;
      user_document: any /* circular reference to UserDocument */;
      user_profile: any /* circular reference to UserProfile */;
    }[];
  }[];
  user_notifications: {
    notification_id: string;
    recipient_profile_id: string;
    sent_timestamp: Date;
    read_timestamp?: Date | null;
    message: string;
    notification_refs: {
      notification_reference_id: string;
      notification_id: string;
      referenced_entity_id: string;
      status: "DRAFT" | "REVIEW" | "PUBLISHED" | "ARCHIVED";
      archived?: boolean | null;
      notification: any /* circular reference to UserNotification */;
    }[];
    user_profile: any /* circular reference to UserProfile */;
  }[];
  user_accounts: {
    account_id: string;
    owner_profile_id: string;
    name: string;
    created_at: Date;
    modified_at?: Date | null;
    is_active: boolean;
    user_profile: any /* circular reference to UserProfile */;
  }[];
  user_two_step_codes: {
    verification_id: string;
    profile_id: string;
    code?: string | null;
    is_verified: boolean;
    created_at: Date;
    verification_type: "EMAIL" | "SMS" | "PUSH";
    user_profile: any /* circular reference to UserProfile */;
  }[];
  user_comments: any /* circular reference to UserComment */[];
  created_by_profile?: any /* circular reference to UserProfile */ | null;
  created_by_id?: string | null;
  profiles_created: any /* circular reference to UserProfile */[];
  threads_as_primary_participant: {
    thread_id: string;
    primary_participant: string;
    secondary_participant?: string | null;
    created_on: Date;
    closed_on?: Date | null;
    is_flagged?: boolean | null;
    flagged_reason?: string | null;
    participant_one: any /* circular reference to UserProfile */;
    participant_two?: any /* circular reference to UserProfile */ | null;
    messages: {
      message_id: string;
      thread_id: string;
      sender_id: string;
      content: string;
      sent_at: Date;
      updated_at?: Date | null;
      is_archived?: boolean | null;
      discussion_thread: any /* circular reference to DiscussionThread */;
      sender: any /* circular reference to UserProfile */;
    }[];
  }[];
  threads_as_secondary_participant: any /* circular reference to DiscussionThread */[];
  sent_messages: any /* circular reference to ThreadMessage */[];
  org_memberships: {
    membership_id: string;
    organization_id: string;
    profile_id: string;
    joined_on: Date;
    is_active?: boolean | null;
    organization: {
      organization_id: string;
      name: string;
      description?: string | null;
      created_on: Date;
      updated_on?: Date | null;
      is_active?: boolean | null;
      events: {
        org_event_id: string;
        organization_id: string;
        event_name: string;
        start_time: Date;
        end_time?: Date | null;
        location?: string | null;
        organization: any /* circular reference to Organization */;
      }[];
      members: any /* circular reference to OrgMembership */[];
      records: {
        record_id: string;
        organization_id: string;
        title: string;
        details?: string | null;
        created_on: Date;
        updated_on?: Date | null;
        organization: any /* circular reference to Organization */;
      }[];
    };
    user_profile: any /* circular reference to UserProfile */;
  }[];
  payments: {
    payment_id: string;
    payer_id: string;
    amount: Decimal;
    paid_at: Date;
    status: "DRAFT" | "REVIEW" | "PUBLISHED" | "ARCHIVED";
    reference_note?: string | null;
    payer: any /* circular reference to UserProfile */;
  }[];
}

import { z } from "zod";

export const UserProfileSchema = z.object({
  profile_id: z.string(),
  created_timestamp: z.date(),
  updated_timestamp: z.date().nullable(),
  deactivated: z.boolean().nullable(),
  full_name: z.string().min(1).max(100),
  email_address: z.string().nullable(),
  phone_number: z.string().nullable(),
  password_hash: z.string().nullable(),
  account_level: z.enum(["BASIC", "PREMIUM", "ADMIN"]).nullable(),
  user_documents: z.array(z.any()),
  user_notifications: z.array(z.any()),
  user_accounts: z.array(z.any()),
  user_two_step_codes: z.array(z.any()),
  user_comments: z.array(z.any()),
  created_by_profile: z.any().nullable(),
  created_by_id: z.string().nullable(),
  profiles_created: z.array(z.any()),
  threads_as_primary_participant: z.array(z.any()),
  threads_as_secondary_participant: z.array(z.any()),
  sent_messages: z.array(z.any()),
  org_memberships: z.array(z.any()),
  payments: z.array(z.any()),
});

// Input / Outputs
// TODO: Fix resolution to any and zod doc to i/o types, as well as flatten circular references to ensure type safety.

// Simple UserCreateInput
// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserCreateInput {
  name: string;
  email: string;
  age?: any;
  isFoo?: boolean;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

import { z } from "zod";

export const UserCreateInputSchema = z.object({
  name: z.string(),
  email: z.string(),
  age: z.number().nullable().optional(),
  isFoo: z.boolean().optional(),
  password: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

// Complex UserProfileCreateInput
// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserProfileCreateInput {
  profile_id?: string;
  created_timestamp?: Date;
  updated_timestamp?: any;
  deactivated?: any;
  full_name: string;
  email_address?: any;
  phone_number?: any;
  password_hash?: any;
  account_level?: any;
  user_documents?: any;
  user_notifications?: any;
  user_accounts?: any;
  user_two_step_codes?: any;
  user_comments?: any;
  created_by_profile?: any;
  profiles_created?: any;
  threads_as_primary_participant?: any;
  threads_as_secondary_participant?: any;
  sent_messages?: any;
  org_memberships?: any;
  payments?: any;
}

import { z } from "zod";

export const UserProfileCreateInputSchema = z.object({
  profile_id: z.string().optional(),
  created_timestamp: z.date().optional(),
  updated_timestamp: z.date().nullable().optional(),
  deactivated: z.boolean().nullable().optional(),
  full_name: z.string(),
  email_address: z.string().nullable().optional(),
  phone_number: z.string().nullable().optional(),
  password_hash: z.string().nullable().optional(),
  account_level: z.enum(["BASIC", "PREMIUM", "ADMIN"]).nullable().optional(),
  user_documents: z.any().optional(),
  user_notifications: z.any().optional(),
  user_accounts: z.any().optional(),
  user_two_step_codes: z.any().optional(),
  user_comments: z.any().optional(),
  created_by_profile: z.any().optional(),
  profiles_created: z.any().optional(),
  threads_as_primary_participant: z.any().optional(),
  threads_as_secondary_participant: z.any().optional(),
  sent_messages: z.any().optional(),
  org_memberships: z.any().optional(),
  payments: z.any().optional(),
});
```

For more examples, check the `/expected` folder in the repository which contains generated output for various Prisma configurations.

## Configuration Options

| Option                | Type                                                             | Default                              | Description                                                                                                                                                                            |
| --------------------- | ---------------------------------------------------------------- | ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| output                | `string`                                                         | `"./generated"`                      | Where to output the generated files.                                                                                                                                                   |
| headerComment         | `string`                                                         | `"Auto-generated by prisma-dto-gen"` | Comment added at the top of each file.                                                                                                                                                 |
| modelType             | `"interface" \| "type"`                                          | `"interface"`                        | Determines how models are declared.                                                                                                                                                    |
| enumType              | `"stringUnion" \| "enum" \| "object"`                            | `"stringUnion"`                      | Controls how enums are generated.                                                                                                                                                      |
| dateType              | `"Date" \| "string" \| "number"`                                 | `"Date"`                             | Mapping used for Date fields.                                                                                                                                                          |
| bigIntType            | `"bigint" \| "string" \| "number"`                               | `"bigint"`                           | Mapping used for BigInt fields.                                                                                                                                                        |
| decimalType           | `"Decimal" \| "string" \| "number"`                              | `"Decimal"`                          | Mapping used for Decimal fields.                                                                                                                                                       |
| bytesType             | `"Buffer" \| "BufferObject" \| ...`                              | `"Buffer"`                           | Mapping used for Bytes fields.                                                                                                                                                         |
| optionalRelations     | `boolean`                                                        | `true`                               | Makes relational fields optional if enabled.                                                                                                                                           |
| omitRelations         | `boolean`                                                        | `false`                              | Omits relational fields entirely.                                                                                                                                                      |
| optionalNullables     | `boolean`                                                        | `false`                              | Makes nullable fields also optional.                                                                                                                                                   |
| prettier              | `boolean`                                                        | `false`                              | Formats the output with Prettier if set to true.                                                                                                                                       |
| resolvePrettierConfig | `boolean`                                                        | `true`                               | Locates a Prettier config for advanced formatting options.                                                                                                                             |
| fileExtension         | `".ts" \| ".mts" \| ".cts" \| ".js" \| ".mjs" \| ".cjs" \| null` | `".js"`                              | File extension for generated files and imports. Set null to omit.                                                                                                                      |
| generateZod           | `boolean`                                                        | `false`                              | Generate Zod schemas alongside interfaces                                                                                                                                              |
| zodValidation         | `boolean`                                                        | `false`                              | Add basic Zod validations where possible                                                                                                                                               |
| maxDepth              | `number`                                                         | `undefined` (5 for action types)     | Maximum nesting depth for complex types. By default, uncapped except for model action types which default to 5 to prevent excessive nesting. Set explicitly to override this behavior. |

## Depth Handling & Type Generation

### The Problem with Deep Types

When generating TypeScript types for Prisma models, especially for complex schemas with many relationships, the resulting type definitions can become extremely large and deeply nested. This can lead to several issues:

1. **Performance Impact**: TypeScript's type checker can struggle with deeply nested types, causing slow IDE response times and lengthy compilation.
2. **File Size**: Generated files can grow exponentially with each level of nesting, sometimes reaching sizes of 100MB+ for complex schemas.
3. **Memory Usage**: Both TypeScript and your IDE need to load and process these large type definitions, which can consume significant memory.

### Our Solution: Smart Depth Handling

To address these issues, we've implemented a smart depth-handling system:

1. **Default Behavior**:
   - Regular types (models, inputs, outputs): No depth limit by default
   - Model action types (e.g., createUser args): Capped at depth 5
2. **Why Cap Action Types?**:
   Action types often include deeply nested query structures that can lead to exponential growth. For example:

   ```typescript
   // Without depth limiting
   type UserWhereInput = {
     AND?: UserWhereInput[]; // Can nest infinitely
     OR?: UserWhereInput[]; // Can nest infinitely
     posts?: {
       some?: {
         AND?: PostWhereInput[]; // More infinite nesting
         // ... and so on
       };
     };
   };
   ```

3. **Depth Limiting in Action**:
   When the max depth is reached, the generator replaces deeper nested types with:
   ```typescript
   any; /* max depth reached */
   ```

### Configuring Depth

You can control depth handling in your schema:

### Opinionated Approach

By default, we cap model action types at depth 5 to prevent excessive nesting. This is a sensible default that balances type safety with performance. If you have a complex schema that requires deeper nesting, you can adjust the `maxDepth` setting in your configuration to increase the limit or remove it entirely. This project is a work in progress, and we're continually refining our depth-handling logic to provide the best balance between type safety and performance. The v1.0.0release will include more advanced depth-handling options and optimizations, with fine tune controlled to override the default behavior for specific models or fields.
