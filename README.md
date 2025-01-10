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

## Features

• Generates zero-dependency TypeScript definitions for models, enums, composite types, input types, and output types.  
• Offers optional flattening of relationship fields by appending “\_id” instead of deeply nesting.  
• Provides customizable scalar mappings (Date to string, BigInt to number, etc.)  
• Creates a structured folder output (by default ./generated) to keep your DTOs organized.  
• Header comments, Prettier support, and optional config for each aspect.  
• Continued work on a set of lightweight Zod schemas to match the DTOs—designed to avoid the overhead of the entire Prisma Client.

## Example Usage

After you configure the generator in your Prisma schema, run:

```bash
npx prisma generate
```

You’ll find a new folder (default is “./generated”) containing TypeScript definitions for your entire Prisma client (models, inputTypes, outputTypes), plus an index.ts aggregator.

## Configuration Options

| Option                | Type                                  | Default                                                      | Description                                                |
| --------------------- | ------------------------------------- | ------------------------------------------------------------ | ---------------------------------------------------------- |
| output                | `string`                              | `"./generated"`                                              | Where to output the generated files.                       |
| headerComment         | `string`                              | `"Auto-generated by prisma-generator-typescript-interfaces"` | Comment added at the top of each file.                     |
| modelType             | `"interface" \| "type"`               | `"interface"`                                                | Determines how models are declared.                        |
| enumType              | `"stringUnion" \| "enum" \| "object"` | `"stringUnion"`                                              | Controls how enums are generated.                          |
| dateType              | `"Date" \| "string" \| "number"`      | `"Date"`                                                     | Mapping used for Date fields.                              |
| bigIntType            | `"bigint" \| "string" \| "number"`    | `"bigint"`                                                   | Mapping used for BigInt fields.                            |
| decimalType           | `"Decimal" \| "string" \| "number"`   | `"Decimal"`                                                  | Mapping used for Decimal fields.                           |
| bytesType             | `"Buffer" \| "BufferObject" \| ...`   | `"Buffer"`                                                   | Mapping used for Bytes fields.                             |
| optionalRelations     | `boolean`                             | `true`                                                       | Makes relational fields optional if enabled.               |
| omitRelations         | `boolean`                             | `false`                                                      | Omits relational fields entirely.                          |
| optionalNullables     | `boolean`                             | `false`                                                      | Makes nullable fields also optional.                       |
| prettier              | `boolean`                             | `false`                                                      | Formats the output with Prettier if set to true.           |
| resolvePrettierConfig | `boolean`                             | `true`                                                       | Locates a Prettier config for advanced formatting options. |
| appendExtensions      | `boolean`                             | `false`                                                      | Add `.ts` extensions to imports for ESM compatibility      |

### TypeScript ESM Compatibility

When using TypeScript with ESM modules (`"type": "module"` in package.json) or certain module resolution strategies (`NodeNext`/`Node16`), you'll need file extensions in import statements. Enable this with:

```prisma
appendExtensions = true

```

## Future Plans

• Expanded zero-dependency Zod schema generation that won’t bloat your front-end or hamper the TypeScript server.  
• More flexible relationship flattening options.  
• Comprehensive test coverage (using the original testing mechanisms ported from Morgan’s codebase).

## Acknowledgments

• Huge thanks to [Morgan Zolob](https://github.com/mogzol/prisma-generator-typescript-interfaces) for the outstanding initial generator logic.  
• Appreciation to [Chris Hoermann](https://github.com/chrishoermann/zod-prisma-types) for demonstrating the power of a single-source-of-truth approach for schema generation.

## Contributing

Contributions are welcome! Feel free to open issues or submit PRs. The structure and testing methodology largely follows the original repo by Morgan but has been tweaked to accommodate the expanded generator logic for input and output types.

## License

[MIT](LICENSE)
