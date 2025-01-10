import type { DMMF } from "@prisma/generator-helper";
import generatorHelper from "@prisma/generator-helper";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve as resolvePath, relative } from "node:path";
const { generatorHandler } = generatorHelper;

/** Configuration options for the DTO generator */
interface Config {
  enumPrefix: string;
  enumSuffix: string;
  modelPrefix: string;
  modelSuffix: string;
  typePrefix: string;
  typeSuffix: string;
  headerComment: string;
  modelType: "interface" | "type";
  enumType: "stringUnion" | "enum" | "object";
  dateType: "Date" | "string" | "number";
  bigIntType: "bigint" | "string" | "number";
  decimalType: "Decimal" | "string" | "number";
  bytesType: "Buffer" | "BufferObject" | "string" | "number[]";
  optionalRelations: boolean;
  omitRelations: boolean;
  optionalNullables: boolean;
  prettier: boolean;
  resolvePrettierConfig: boolean;
  appendExtensions: boolean;
  schema: "zod" | null;
  schemaPrefix: string;
  schemaSuffix: string;
}

const DEFAULT_SCHEMA_SUFFIX = "Schema";

/** Maps Prisma scalar types to their corresponding TypeScript types */
const SCALAR_TYPE_GETTERS: Record<string, (config: Config) => string> = {
  String: () => "string",
  Boolean: () => "boolean",
  Int: () => "number",
  Float: () => "number",
  Json: () => "JsonValue",
  DateTime: (c) => c.dateType,
  BigInt: (c) => c.bigIntType,
  Decimal: (c) => c.decimalType,
  Bytes: (c) => c.bytesType,
};

const ZOD_SCALAR_TYPE_GETTERS: Record<string, (config: Config) => string> = {
  String: () => "z.string()",
  Boolean: () => "z.boolean()",
  Int: () => "z.number()",
  Float: () => "z.number()",
  Json: () => "z.any()",
  DateTime: (c) => (c.dateType === "Date" ? "z.date()" : "z.string()"),
  BigInt: (c) => (c.bigIntType === "bigint" ? "z.bigint()" : "z.string()"),
  Decimal: () => "z.any()",
  Bytes: () => "z.instanceof(Buffer)",
};

/** Core TypeScript type definitions required by the generated DTOs */
const CUSTOM_TYPES = {
  BufferObject: `export type BufferObject = { type: "Buffer"; data: number[] };`,
  Decimal: `export type Decimal = { valueOf(): string };`,
  JsonValue: `export type JsonValue =
  | string
  | number
  | boolean
  | { [key: string]: JsonValue }
  | JsonValue[]
  | null;`,
};

/**
 * Validates generator configuration against allowed values
 * @throws {Error} If any configuration options are invalid
 */
function validateConfig(config: Config) {
  const errors: string[] = [];
  if (!["interface", "type"].includes(config.modelType)) {
    errors.push(`Invalid modelType: ${config.modelType}`);
  }
  if (!["stringUnion", "enum", "object"].includes(config.enumType)) {
    errors.push(`Invalid enumType: ${config.enumType}`);
  }
  if (!["Date", "string", "number"].includes(config.dateType)) {
    errors.push(`Invalid dateType: ${config.dateType}`);
  }
  if (!["bigint", "string", "number"].includes(config.bigIntType)) {
    errors.push(`Invalid bigIntType: ${config.bigIntType}`);
  }
  if (!["Decimal", "string", "number"].includes(config.decimalType)) {
    errors.push(`Invalid decimalType: ${config.decimalType}`);
  }
  if (!["Buffer", "BufferObject", "string", "number[]"].includes(config.bytesType)) {
    errors.push(`Invalid bytesType: ${config.bytesType}`);
  }
  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }
}

/**
 * Constructs a TypeScript union type from an array of type strings.
 * Handles deduplication and special cases like 'any'.
 */
function buildUnionType(types: string[]): string {
  const unique = new Set(types);
  if (unique.has("any") && unique.size > 1) {
    unique.delete("any");
  }
  if (unique.size === 0) return "any";

  const arr = [...unique];
  return arr.length === 1 ? arr[0] : `(${arr.join(" | ")})`;
}

/** Represents a type reference with its import path */
interface Ref {
  name: string;
  importPath: string;
}

/**
 * Generates TypeScript import statements for type references.
 * Handles relative paths and deduplication of imports.
 */
function generateImportLines(
  references: Set<Ref>,
  fileDir: string,
  currentFilePath: string,
  localTypeName: string,
  config: Config, // Add config parameter
): string {
  const byPath = new Map<string, string[]>();

  for (const ref of references) {
    if (ref.name === localTypeName) continue; // skip self

    // Special handling for zod imports
    if (ref.importPath === "zod") {
      if (!byPath.has("zod")) {
        byPath.set("zod", []);
      }
      byPath.get("zod")!.push(ref.name);
      continue;
    }

    const refAbs = resolvePath(fileDir, "..", ref.importPath) + ".ts";
    if (refAbs === currentFilePath) continue; // same file
    if (!byPath.has(ref.importPath)) {
      byPath.set(ref.importPath, []);
    }
    byPath.get(ref.importPath)!.push(ref.name);
  }

  const lines: string[] = [];
  for (const [importPath, names] of byPath.entries()) {
    const uniqueNames = [...new Set(names)];
    if (importPath === "zod") {
      lines.push(`import { ${uniqueNames.join(", ")} } from "zod";`);
    } else {
      let rel = relative(fileDir, resolvePath(fileDir, "..", importPath));
      if (!rel.startsWith(".")) {
        rel = `./${rel}`;
      }
      // Remove any potential double extensions
      const cleanPath = rel.replace(/\.ts\.ts$/, ".ts");
      lines.push(
        `import { ${uniqueNames.join(", ")} } from "${cleanPath}${
          config.appendExtensions ? ".ts" : ""
        }";`,
      );
    }
  }
  return lines.join("\n");
}

/**
 * Writes TypeScript content to a file with optional formatting.
 * Handles header comments, empty files, and Prettier formatting.
 */
async function writeTsFile({
  filePath,
  content,
  config,
}: {
  filePath: string;
  content: string;
  config: Config;
}) {
  if (config.headerComment) {
    const hdr = config.headerComment
      .split("\n")
      .map((x) => `// ${x}`)
      .join("\n");
    content = `${hdr}\n\n${content}`;
  }

  // If empty => export {}
  if (!content.trim()) {
    content = "// (auto-generated empty file)\nexport {};";
  }

  // Prettier if needed
  if (config.prettier) {
    let prettier: typeof import("prettier");
    try {
      prettier = await import("prettier");
    } catch {
      throw new Error("Unable to import Prettier. Is it installed?");
    }
    const opts = config.resolvePrettierConfig ? await prettier.resolveConfig(filePath) : null;
    content = await prettier.format(content, {
      ...opts,
      parser: "typescript",
    });
  }

  await mkdir(dirname(filePath), { recursive: true });
  await writeFile(filePath, content, "utf-8");
}

/**
 * Generates an index file that re-exports all TypeScript files in a directory.
 */
async function writeIndexFileForFolder(
  folderPath: string,
  filenames: string[],
  config: Config,
  appendExtension: boolean = false,
) {
  const lines = filenames.map((fn) => {
    const baseNoExt = fn.replace(/\.ts$/, "");
    return `export * from './${baseNoExt}${appendExtension ? ".ts" : ""}';`;
  });
  const indexPath = resolvePath(folderPath, "index.ts");
  const content = lines.join("\n");
  await writeTsFile({ filePath: indexPath, content, config });
}

/**
 * Generates the root index.ts file that exports all submodules. We can append /index.ts optionally
 */
async function writeRootIndexFile(
  rootDir: string,
  config: Config,
  subfolders: string[],
  appendIndexFile = false,
) {
  const lines = subfolders.map(
    (sf) => `export * as ${sf} from './${sf}${appendIndexFile ? "/index.ts" : ""}';`,
  );
  const filePath = resolvePath(rootDir, "index.ts");
  const content = lines.join("\n");
  await writeTsFile({ filePath, content, config });
}

/**
 * Registers custom type imports when specialized types are used.
 * Manages references to types like JsonValue, Decimal, etc.
 */
function maybeAddCustomTypeReference(
  tsType: string,
  references: Set<Ref>,
  usedCustomTypes: Set<keyof typeof CUSTOM_TYPES>,
) {
  if (tsType in CUSTOM_TYPES) {
    usedCustomTypes.add(tsType as keyof typeof CUSTOM_TYPES);
    references.add({ name: tsType, importPath: "utility/CustomTypes" });
  }
}

/**
 * Normalizes relation field names by appending "_id" if not present.
 */
function flattenRelationFieldName(fieldName: string): string {
  if (fieldName.endsWith("_id")) return fieldName;
  return fieldName + "_id";
}

/**
 * Helper function to fix import paths for schema files
 */
function getSchemaImportPath(
  currentDir: string,
  targetType: string,
  targetFolder: string,
  outputDir: string,
  config: Config,
): string {
  if (!config) console.log(config); // Placeholder, dont sweat it. Also dont remove it. Trust me.
  // If target folder is the same as the current directory's folder name,
  // use relative path within same directory
  const currentFolder = currentDir.split("/").pop();
  if (currentFolder === targetFolder) {
    return `./${targetType}.schema`;
  }

  // Otherwise calculate relative path from current directory to target folder
  const relativePath = relative(currentDir, resolvePath(outputDir, targetFolder));
  const path = relativePath.startsWith(".") ? relativePath : "./" + relativePath;
  return `${path}/${targetType}.schema`;
}

/**
 * Generate import lines with special handling for zod and schema files
 */
function generateSchemaImportLines(
  references: Set<Ref>,
  fileDir: string,
  currentFilePath: string,
  localTypeName: string,
  config: Config,
): string {
  const lines: string[] = [];
  const byPath = new Map<string, string[]>();

  for (const ref of references) {
    if (ref.name === localTypeName) continue;

    if (ref.importPath === "zod") {
      lines.unshift(`import { z } from "zod";`); // Ensure zod import is first
      continue;
    }

    // For other imports
    if (!byPath.has(ref.importPath)) {
      byPath.set(ref.importPath, []);
    }
    byPath.get(ref.importPath)!.push(ref.name);
  }

  // Handle schema imports
  for (const [importPath, names] of byPath.entries()) {
    const uniqueNames = [...new Set(names)];
    const cleanPath = importPath.replace(/\.ts\.ts$/, ".ts");
    lines.push(
      `import { ${uniqueNames.join(", ")} } from "${cleanPath}${
        config.appendExtensions ? ".ts" : ""
      }";`,
    );
  }

  return lines.join("\n");
}

generatorHandler({
  onManifest() {
    return {
      prettyName: "Prisma DTO Generator",
      defaultOutput: "./generated",
    };
  },

  async onGenerate(options) {
    const baseConfig = options.generator.config;
    const config: Config = {
      enumPrefix: "",
      enumSuffix: "",
      modelPrefix: "",
      modelSuffix: "",
      typePrefix: "",
      typeSuffix: "",
      headerComment: "Auto-generated by prisma-dto-gen",
      modelType: "interface",
      enumType: "stringUnion",
      dateType: "Date",
      bigIntType: "bigint",
      decimalType: "Decimal",
      bytesType: "Buffer",
      ...baseConfig,
      optionalRelations: baseConfig.optionalRelations !== "false",
      omitRelations: baseConfig.omitRelations === "true",
      optionalNullables: baseConfig.optionalNullables === "true",
      prettier: baseConfig.prettier === "true",
      resolvePrettierConfig: baseConfig.resolvePrettierConfig !== "false",
      appendExtensions: baseConfig.appendExtensions === "true",
      schema: baseConfig.schema === "zod" ? "zod" : null,
      schemaPrefix: String(baseConfig.schemaPrefix || ""),
      schemaSuffix: String(baseConfig.schemaSuffix || DEFAULT_SCHEMA_SUFFIX),
    };

    validateConfig(config);

    const outputDir = options.generator.output?.value ?? "./generated";
    const { datamodel, schema } = options.dmmf;
    const { models, enums, types } = datamodel;

    // Input & Output types
    const inputObjectTypes = [
      ...(schema.inputObjectTypes?.prisma ?? []),
      ...(schema.inputObjectTypes?.model ?? []),
    ];
    const outputObjectTypes = [
      ...(schema.outputObjectTypes?.prisma ?? []),
      ...(schema.outputObjectTypes?.model ?? []),
    ];

    // Keep track of which custom types we actually use.
    const usedCustomTypes = new Set<keyof typeof CUSTOM_TYPES>();

    // Build name maps
    const enumNameMap = new Map<string, string>(
      enums.map((e) => [e.name, config.enumPrefix + e.name + config.enumSuffix]),
    );
    const modelNameMap = new Map<string, string>(
      models.map((m) => [m.name, config.modelPrefix + m.name + config.modelSuffix]),
    );
    const typeNameMap = new Map<string, string>(
      types.map((t) => [t.name, config.typePrefix + t.name + config.typeSuffix]),
    );
    const inputNameMap = new Map<string, string>(
      inputObjectTypes.map((io) => [io.name, config.typePrefix + io.name + config.typeSuffix]),
    );
    const outputNameMap = new Map<string, string>(
      outputObjectTypes.map((oo) => [oo.name, config.typePrefix + oo.name + config.typeSuffix]),
    );

    // Map: global type -> file path
    const globalTypeToPath = new Map<string, string>();
    for (const e of enums) {
      const mapped = enumNameMap.get(e.name) ?? e.name;
      globalTypeToPath.set(mapped, `utility/${mapped}`);
    }
    for (const m of models) {
      const mapped = modelNameMap.get(m.name) ?? m.name;
      globalTypeToPath.set(mapped, `models/${mapped}`);
    }
    for (const t of types) {
      const mapped = typeNameMap.get(t.name) ?? t.name;
      globalTypeToPath.set(mapped, `models/${mapped}`);
    }
    for (const i of inputObjectTypes) {
      const mapped = inputNameMap.get(i.name) ?? i.name;
      globalTypeToPath.set(mapped, `inputTypes/${mapped}`);
    }
    for (const o of outputObjectTypes) {
      const mapped = outputNameMap.get(o.name) ?? o.name;
      globalTypeToPath.set(mapped, `outputTypes/${mapped}`);
    }

    /**
     * Generate code for enums
     */
    function generateEnumTs(e: DMMF.DatamodelEnum, mappedName: string): string {
      switch (config.enumType) {
        case "enum": {
          const lines = e.values.map((v) => `  ${v.name} = "${v.name}"`).join(",\n");
          return `export enum ${mappedName} {\n${lines}\n}`;
        }
        case "stringUnion": {
          const union = e.values.map((v) => `"${v.name}"`).join(" | ");
          return `export type ${mappedName} = ${union};`;
        }
        case "object": {
          const pairs = e.values.map((v) => `  ${v.name}: "${v.name}"`).join(",\n");
          return `
export const ${mappedName} = {
${pairs}
} as const;

export type ${mappedName} = typeof ${mappedName}[keyof typeof ${mappedName}];
          `.trim();
        }
      }
      return "";
    }

    async function generateEnumFile(e: DMMF.DatamodelEnum) {
      const mapped = enumNameMap.get(e.name) ?? e.name;
      const content = generateEnumTs(e, mapped);
      const filePath = resolvePath(outputDir, `utility/${mapped}.ts`);
      await writeTsFile({ filePath, content, config });
      return mapped + ".ts";
    }

    /**
     * Generate code for a Model
     *
     * - For required fields, `field: T` or `field: T | null`
     * - For optional fields, `field?: T` or `field?: T | null`
     *   (We check the DB-level nullability or your custom “optionalNullables” logic.)
     */
    async function generateModelFile(m: DMMF.Model, isComposite: boolean) {
      const mapped = (isComposite ? typeNameMap.get(m.name) : modelNameMap.get(m.name)) ?? m.name;

      const references = new Set<Ref>();

      const lines = m.fields.map((field) => {
        const { name, kind, type, isList, isRequired } = field;

        // isRequired=false => `?: T | null`
        // isRequired=true => `: T` (or `: T | null` if the field is "nullable"?)
        // Prisma indicates a field can be null if "?" in the schema (which sets isRequired=false).
        // If the schema somehow had isRequired=true but the DB type is still nullable, you could handle it, but typically that won't happen.
        const prefix = isRequired ? ":" : "?:";
        const suffix = "";

        // We'll default to unioning in "| null" if isRequired=false
        // That matches typical Prisma behavior: you can omit the field (undefined) or set null.
        const orNull = !isRequired ? " | null" : "";

        // Also consider isList => T[]
        const arr = isList ? "[]" : "";

        let tsType = "any";
        if (kind === "scalar") {
          const getter = SCALAR_TYPE_GETTERS[type];
          if (getter) {
            tsType = getter(config);
            maybeAddCustomTypeReference(tsType, references, usedCustomTypes);
          }
        } else if (kind === "enum") {
          const enName = enumNameMap.get(type);
          if (enName) {
            tsType = enName;
            const ref = globalTypeToPath.get(enName);
            if (ref) {
              references.add({ name: enName, importPath: ref });
            }
          }
        } else if (kind === "object") {
          // For read models, reference sub-model unless we omit relations entirely
          const refName = modelNameMap.get(type) ?? typeNameMap.get(type);
          if (refName) {
            if (config.omitRelations) {
              // Skip relation fields if omitRelations
              return null;
            }
            // For an object, we might say `field?: SomeRef | null` if optional
            const relOrNull = config.optionalRelations && !isRequired ? " | null" : "";
            const finalRef = refName + (isList ? "[]" : "");
            const subRef = globalTypeToPath.get(refName);
            if (subRef) {
              references.add({ name: refName, importPath: subRef });
            }
            return `  ${name}${prefix} ${finalRef}${relOrNull};`;
          }
        }

        return `  ${name}${prefix} ${tsType}${arr}${orNull}${suffix};`;
      });

      const filtered = lines.filter((x): x is string => x !== null).join("\n");
      let body = "";
      if (config.modelType === "interface") {
        body = `export interface ${mapped} {\n${filtered}\n}`;
      } else {
        body = `export type ${mapped} = {\n${filtered}\n}`;
      }

      const fileDir = resolvePath(outputDir, "models");
      const currentFilePath = resolvePath(fileDir, `${mapped}.ts`);
      const imports = generateImportLines(references, fileDir, currentFilePath, mapped, config);
      const content = [imports, body].filter(Boolean).join("\n\n");

      const filePath = resolvePath(fileDir, `${mapped}.ts`);
      await writeTsFile({ filePath, content, config });
      return `${mapped}.ts`;
    }

    /**
     * Flattened input types:
     *
     * - If referencing another input object => "someRelation_id?: string | null"
     * - Otherwise union scalars/enums => "field?: T | null"
     */
    async function generateInputTypeFile(io: DMMF.InputType) {
      const mapped = inputNameMap.get(io.name) ?? io.name;
      const references = new Set<Ref>();
      const linesMap = new Map<string, string>();

      for (const field of io.fields) {
        const { name, isRequired } = field;
        // If not required => we do `?: T | null`
        // If required => `: T` or `: T | null`
        const prefix = isRequired ? ":" : "?:";
        const orNull = isRequired ? "" : " | null";

        // If referencing another input object => flatten
        const possiblyObject = field.inputTypes.find((it) => it.location === "inputObjectTypes");
        if (possiblyObject) {
          const finalName = flattenRelationFieldName(name);
          // E.g. "someRelation_id?: string | null"
          if (!linesMap.has(finalName)) {
            const line = `  ${finalName}${prefix} string${orNull};`;
            linesMap.set(finalName, line);
          }
          continue;
        }

        // Otherwise build union from scalar/enum
        const unionTypes = field.inputTypes.map((it) => {
          if (it.location === "scalar") {
            const getter = SCALAR_TYPE_GETTERS[String(it.type)];
            if (!getter) return "any";
            const st = getter(config);
            maybeAddCustomTypeReference(st, references, usedCustomTypes);
            return it.isList ? `${st}[]` : st;
          } else if (it.location === "enumTypes") {
            const enName = enumNameMap.get(String(it.type)) ?? "any";
            if (enName !== "any") {
              const ref = globalTypeToPath.get(enName);
              if (ref) {
                references.add({ name: enName, importPath: ref });
              }
            }
            return it.isList ? `${enName}[]` : enName;
          }
          return "any";
        });

        const union = buildUnionType(unionTypes) + orNull;
        if (!linesMap.has(name)) {
          linesMap.set(name, `  ${name}${prefix} ${union};`);
        }
      }

      const lines = [...linesMap.values()];
      const fileDir = resolvePath(outputDir, "inputTypes");
      const currentFilePath = resolvePath(fileDir, `${mapped}.ts`);
      const importLines = generateImportLines(references, fileDir, currentFilePath, mapped, config);

      const body = `export interface ${mapped} {\n${lines.join("\n")}\n}`;
      const content = [importLines, body].filter(Boolean).join("\n\n");

      const filePath = resolvePath(fileDir, `${mapped}.ts`);
      await writeTsFile({ filePath, content, config });
      return `${mapped}.ts`;
    }

    /**
     * Output types.
     * Instead of reading outputType.isNullable, we read `field.isNullable` from DMMF.SchemaField
     * Then we do the same approach: if !isNullable => field?: T, etc.
     */
    async function generateOutputTypeFile(oo: DMMF.OutputType) {
      const mapped = outputNameMap.get(oo.name) ?? oo.name;
      const references = new Set<Ref>();

      const lines = oo.fields.map((field) => {
        const isNullable = Boolean(field.isNullable);
        const { isList, location, type: rawType } = field.outputType;
        // If it's "isNullable = false", we typically do required, otherwise optional
        // But Prisma output can be optional or always returned, so let's say:
        // Usually output fields are always present, but if the DB says isNullable, then "T | null"
        // We'll skip the question mark (?) for output because Prisma returns them (though possibly null).
        // If you want them optional, you can tweak the logic below.
        const prefix = isNullable ? "?:" : ":";
        const orNull = isNullable ? " | null" : "";
        // (If you'd prefer all output fields be non-optional, remove `prefix` usage.)

        let tsType = "any";
        if (location === "scalar") {
          const getter = SCALAR_TYPE_GETTERS[String(rawType)];
          if (getter) {
            tsType = getter(config);
            maybeAddCustomTypeReference(tsType, references, usedCustomTypes);
          }
        } else if (location === "enumTypes") {
          const enName = enumNameMap.get(String(rawType)) ?? "any";
          if (enName !== "any") {
            const ref = globalTypeToPath.get(enName);
            if (ref) {
              references.add({ name: enName, importPath: ref });
            }
          }
          tsType = enName;
        } else if (location === "outputObjectTypes") {
          const outName = outputNameMap.get(String(rawType)) ?? "any";
          if (outName !== "any") {
            const ref = globalTypeToPath.get(outName);
            if (ref) {
              references.add({ name: outName, importPath: ref });
            }
          }
          tsType = outName;
        }
        const arr = isList ? "[]" : "";
        return `  ${field.name}${prefix} ${tsType}${arr}${orNull};`;
      });

      const fileDir = resolvePath(outputDir, "outputTypes");
      const currentFilePath = resolvePath(fileDir, `${mapped}.ts`);
      const importLines = generateImportLines(references, fileDir, currentFilePath, mapped, config);

      const body = `export interface ${mapped} {\n${lines.join("\n")}\n}`;
      const content = [importLines, body].filter(Boolean).join("\n\n");

      const filePath = resolvePath(fileDir, `${mapped}.ts`);
      await writeTsFile({ filePath, content, config });
      return `${mapped}.ts`;
    }

    async function generateModelSchemaFile(m: DMMF.Model, isComposite: boolean, config: Config) {
      const modelName =
        (isComposite ? typeNameMap.get(m.name) : modelNameMap.get(m.name)) ?? m.name;
      const schemaName = `${config.schemaPrefix}${modelName}${config.schemaSuffix}`;
      const references = new Set<Ref>();

      // Add zod import
      references.add({ name: "z", importPath: "zod" });

      const fields = m.fields.map((field) => {
        const { name, kind, type, isList, isRequired } = field;

        let zodType = "z.any()";
        if (kind === "scalar") {
          const getter = ZOD_SCALAR_TYPE_GETTERS[type];
          if (getter) {
            zodType = getter(config);
          }
        } else if (kind === "enum") {
          const enumName = enumNameMap.get(type);
          if (enumName) {
            const ref = globalTypeToPath.get(enumName);
            if (ref) {
              references.add({
                name: `${enumName}${config.schemaSuffix}`,
                importPath: `${ref}.schema`,
              });
            }
            zodType = `${enumName}${config.schemaSuffix}`;
          }
        } else if (kind === "object") {
          if (!config.omitRelations) {
            const refName = modelNameMap.get(type) ?? typeNameMap.get(type);
            if (refName) {
              const ref = globalTypeToPath.get(refName);
              if (ref) {
                references.add({
                  name: `${refName}${config.schemaSuffix}`,
                  importPath: `${ref}.schema`,
                });
              }
              zodType = `${refName}${config.schemaSuffix}`;
            }
          } else {
            return null;
          }
        }

        if (isList) {
          zodType = `z.array(${zodType})`;
        }

        if (!isRequired) {
          zodType = `${zodType}.nullable()`;
        }

        return `  ${name}: ${zodType}`;
      });

      const filteredFields = fields.filter((x): x is string => x !== null);

      const body = `export const ${schemaName} = z.object({\n${filteredFields.join(",\n")}\n});`;

      const fileDir = resolvePath(outputDir, "models");
      const currentFilePath = resolvePath(fileDir, `${modelName}.schema.ts`);
      const imports = generateImportLines(references, fileDir, currentFilePath, modelName, config);
      const content = [imports, body].filter(Boolean).join("\n\n");

      const filePath = resolvePath(fileDir, `${modelName}.schema.ts`);
      await writeTsFile({ filePath, content, config });
      return `${modelName}.schema.ts`;
    }

    async function generateEnumSchemaFile(e: DMMF.DatamodelEnum) {
      const mapped = enumNameMap.get(e.name) ?? e.name;
      const schemaName = `${config.schemaPrefix}${mapped}${config.schemaSuffix}`;

      // Generate enum values
      const enumValues = e.values.map((v) => `"${v.name}"`).join(", ");

      const content = `import { z } from 'zod';
  
  export const ${schemaName} = z.enum([${enumValues}]);`;

      const filePath = resolvePath(outputDir, `utility/${mapped}.schema.ts`);
      await writeTsFile({ filePath, content, config });
      return `${mapped}.schema.ts`;
    }

    async function generateInputTypeSchemaFile(io: DMMF.InputType) {
      const mapped = inputNameMap.get(io.name) ?? io.name;
      const schemaName = `${config.schemaPrefix}${mapped}${config.schemaSuffix}`;
      const references = new Set<Ref>();
      const fileDir = resolvePath(outputDir, "inputTypes");

      // Add zod import
      references.add({ name: "z", importPath: "zod" });

      const fields = io.fields.map((field) => {
        const { name, isRequired } = field;
        let zodType = "z.any()";

        // Handle field types
        const typeInfo = field.inputTypes[0]; // Take first type as primary
        if (typeInfo.location === "scalar") {
          const getter = ZOD_SCALAR_TYPE_GETTERS[String(typeInfo.type)];
          if (getter) zodType = getter(config);
        } else if (typeInfo.location === "enumTypes") {
          const enumName = enumNameMap.get(String(typeInfo.type));
          if (enumName) {
            const importPath = getSchemaImportPath(fileDir, enumName, "utility", outputDir, config);
            references.add({
              name: `${enumName}${config.schemaSuffix}`,
              importPath,
            });
            zodType = `${enumName}${config.schemaSuffix}`;
          }
        }

        if (typeInfo.isList) {
          zodType = `z.array(${zodType})`;
        }

        if (!isRequired) {
          zodType = `${zodType}.nullable()`;
        }

        return `  ${name}: ${zodType}`;
      });

      const body = `export const ${schemaName} = z.object({\n${fields.join(",\n")}\n});`;

      const currentFilePath = resolvePath(fileDir, `${mapped}.schema.ts`);
      const imports = generateImportLines(references, fileDir, currentFilePath, mapped, config);
      const content = [imports, body].filter(Boolean).join("\n\n");

      const filePath = resolvePath(fileDir, `${mapped}.schema.ts`);
      await writeTsFile({ filePath, content, config });
      return `${mapped}.schema.ts`;
    }

    async function generateOutputTypeSchemaFile(oo: DMMF.OutputType) {
      const mapped = outputNameMap.get(oo.name) ?? oo.name;
      const schemaName = `${config.schemaPrefix}${mapped}${config.schemaSuffix}`;
      const references = new Set<Ref>();
      const fileDir = resolvePath(outputDir, "outputTypes");

      // Add zod import properly
      references.add({ name: "z", importPath: "zod" });

      const fields = oo.fields.map((field) => {
        const {
          isNullable,
          outputType: { isList, location, type: rawType },
        } = field;
        let zodType = "z.any()";

        if (location === "scalar") {
          const getter = ZOD_SCALAR_TYPE_GETTERS[String(rawType)];
          if (getter) zodType = getter(config);
        } else if (location === "enumTypes") {
          const enumName = enumNameMap.get(String(rawType));
          if (enumName) {
            const importPath = getSchemaImportPath(fileDir, enumName, "utility", outputDir, config);
            references.add({
              name: `${enumName}${config.schemaSuffix}`,
              importPath,
            });
            zodType = `${enumName}${config.schemaSuffix}`;
          }
        } else if (location === "outputObjectTypes") {
          const outName = outputNameMap.get(String(rawType));
          if (outName) {
            // Always use local directory for output type schemas
            const importPath = `./${outName}.schema`;
            references.add({
              name: `${outName}${config.schemaSuffix}`,
              importPath,
            });
            zodType = `${outName}${config.schemaSuffix}`;
          }
        }

        if (isList) {
          zodType = `z.array(${zodType})`;
        }

        if (isNullable) {
          zodType = `${zodType}.nullable()`;
        }

        return `  ${field.name}: ${zodType}`;
      });

      const body = `export const ${schemaName} = z.object({\n${fields.join(",\n")}\n});`;

      const currentFilePath = resolvePath(fileDir, `${mapped}.schema.ts`);
      // Use new schema-specific import generator
      const imports = generateSchemaImportLines(
        references,
        fileDir,
        currentFilePath,
        mapped,
        config,
      );
      const content = [imports, body].filter(Boolean).join("\n\n");

      const filePath = resolvePath(fileDir, `${mapped}.schema.ts`);
      await writeTsFile({ filePath, content, config });
      return `${mapped}.schema.ts`;
    }

    // --- Generate everything ---
    const enumFiles: string[] = [];
    const modelFiles: string[] = [];
    const inputFiles: string[] = [];
    const outputFiles: string[] = [];

    // Enums -> utility/
    for (const e of enums) {
      const f = await generateEnumFile(e);
      enumFiles.push(f);
    }

    // Models -> models/
    for (const m of models) {
      const f = await generateModelFile(m, false);
      if (f) modelFiles.push(f);
    }
    // Composite -> also models/
    for (const t of types) {
      const f = await generateModelFile(t, true);
      if (f) modelFiles.push(f);
    }

    // Input -> inputTypes/
    for (const io of inputObjectTypes) {
      const f = await generateInputTypeFile(io);
      if (f) inputFiles.push(f);
    }

    // Output -> outputTypes/
    for (const oo of outputObjectTypes) {
      const f = await generateOutputTypeFile(oo);
      if (f) outputFiles.push(f);
    }

    // If we used custom types => generate utility/CustomTypes.ts
    if (usedCustomTypes.size > 0) {
      const lines: string[] = [];
      for (const t of usedCustomTypes) {
        lines.push(CUSTOM_TYPES[t]);
      }
      const ctPath = resolvePath(outputDir, "utility", "CustomTypes.ts");
      await writeTsFile({ filePath: ctPath, content: lines.join("\n\n"), config });
      enumFiles.push("CustomTypes.ts");
    }

    // After generating model files, generate schema files if enabled
    if (config.schema === "zod") {
      // Generate schema files for enums
      for (const e of enums) {
        const f = await generateEnumSchemaFile(e);
        if (f) enumFiles.push(f);
      }

      // Generate schema files for models and types
      for (const m of models) {
        const f = await generateModelSchemaFile(m, false, config);
        if (f) modelFiles.push(f);
      }
      for (const t of types) {
        const f = await generateModelSchemaFile(t, true, config);
        if (f) modelFiles.push(f);
      }

      // Generate schema files for input types
      for (const io of inputObjectTypes) {
        const f = await generateInputTypeSchemaFile(io);
        if (f) inputFiles.push(f);
      }

      // Generate schema files for output types
      for (const oo of outputObjectTypes) {
        const f = await generateOutputTypeSchemaFile(oo);
        if (f) outputFiles.push(f);
      }
    }

    // Subfolder indexes
    const utilityDir = resolvePath(outputDir, "utility");
    await writeIndexFileForFolder(utilityDir, enumFiles, config, true);

    const modelsDir = resolvePath(outputDir, "models");
    await writeIndexFileForFolder(modelsDir, modelFiles, config, true);

    const inputDir = resolvePath(outputDir, "inputTypes");
    await writeIndexFileForFolder(inputDir, inputFiles, config, true);

    const outputDir_ = resolvePath(outputDir, "outputTypes");
    await writeIndexFileForFolder(outputDir_, outputFiles, config, true);

    // Root index
    await writeRootIndexFile(
      outputDir,
      config,
      ["utility", "models", "inputTypes", "outputTypes"],
      true,
    );
  },
});
