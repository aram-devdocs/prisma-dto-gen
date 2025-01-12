// import { generatorHandler } from "@prisma/generator-helper";
import generatorHelper from "@prisma/generator-helper";
import { resolve as resolvePath } from "node:path";
import type { DMMF } from "@prisma/generator-helper";

import { Config } from "./libs/config/config.js";
import { DEFAULT_SCHEMA_SUFFIX } from "./libs/config/config.js";
import { validateConfig } from "./libs/utils/validateConfig.js";
import { writeTsFile } from "./libs/utils/writeTsFile.js";

import { generateEnumFileInline } from "./libs/renderers/enumRenderer.js";
import { generateModelFileInline } from "./libs/renderers/modelRenderer.js";
import { generateComplexTypeInline } from "./libs/renderers/complexTypeRenderer.js";
import { modelOperationName } from "./libs/utils/camelCase.js";
import fs from "node:fs/promises";
const { generatorHandler } = generatorHelper;

generatorHandler({
  onManifest() {
    return {
      prettyName: "Prisma DTO Generator",
      defaultOutput: "./generated",
    };
  },
  async onGenerate(options) {
    // 1) Build config from options
    const baseConfig = options.generator.config;
    const config: Config = {
      enumPrefix: "",
      enumSuffix: "",
      modelPrefix: "",
      modelSuffix: "",
      typePrefix: "",
      typeSuffix: "",
      headerComment: "Auto-generated by prisma-dto-gen (refactored inline)",
      modelType: "interface",
      enumType: "stringUnion",
      dateType: "Date",
      bigIntType: "bigint",
      decimalType: "Decimal",
      bytesType: "Buffer",
      optionalRelations: baseConfig.optionalRelations !== "false",
      omitRelations: baseConfig.omitRelations === "true",
      optionalNullables: baseConfig.optionalNullables === "true",
      prettier: baseConfig.prettier === "true",
      resolvePrettierConfig: baseConfig.resolvePrettierConfig !== "false",
      appendExtensions: baseConfig.appendExtensions === "true",
      schema: baseConfig.schema === "zod" ? "zod" : null,
      schemaPrefix: String(baseConfig.schemaPrefix || ""),
      schemaSuffix: String(baseConfig.schemaSuffix || DEFAULT_SCHEMA_SUFFIX),
      fileExtension: (baseConfig.fileExtension as Config["fileExtension"]) || ".js",
      maxDepth:
        baseConfig.maxDepth && typeof baseConfig.maxDepth === "string"
          ? parseInt(baseConfig.maxDepth, 10)
          : undefined,
    };
    validateConfig(config);

    // 2) Gather data and clean output directory
    const outputDir = options.generator.output?.value ?? "./generated";

    // 2.1) Clean output directory
    await fs.rmdir(outputDir, { recursive: true });
    await fs.mkdir(outputDir, { recursive: true });

    const { datamodel, schema } = options.dmmf;
    const { models = [], enums = [], types = [] } = datamodel;

    const inputObjectTypes = [
      ...(schema.inputObjectTypes?.prisma ?? []),
      ...(schema.inputObjectTypes?.model ?? []),
    ];
    const outputObjectTypes = [
      ...(schema.outputObjectTypes?.prisma ?? []),
      ...(schema.outputObjectTypes?.model ?? []),
    ];

    // Build maps
    const enumMap = new Map<string, DMMF.DatamodelEnum>(enums.map((e) => [e.name, e]));
    const modelMap = new Map<string, DMMF.Model>(models.map((m) => [m.name, m]));

    for (const t of types) {
      modelMap.set(t.name, t);
    }

    // 3) Generate enum files
    const enumFiles: string[] = [];
    for (const e of enums) {
      const content = generateEnumFileInline(e, config);
      const filePath = resolvePath(outputDir, `enum_${e.name}.ts`);
      await writeTsFile({ filePath, content, config });
      enumFiles.push(filePath);
    }

    // 4) Generate model files
    const modelFiles: string[] = [];
    for (const m of models) {
      const content = generateModelFileInline(m, [...models, ...types], enumMap, modelMap, config);
      const filePath = resolvePath(outputDir, `model_${m.name}.ts`);
      await writeTsFile({ filePath, content, config });
      modelFiles.push(filePath);
    }
    for (const t of types) {
      const content = generateModelFileInline(t, [...models, ...types], enumMap, modelMap, config);
      const filePath = resolvePath(outputDir, `type_${t.name}.ts`);
      await writeTsFile({ filePath, content, config });
      modelFiles.push(filePath);
    }

    // 5) Generate input object files
    const inputTypeFiles: string[] = [];
    for (const io of inputObjectTypes) {
      const content = generateComplexTypeInline(
        io,
        [...models, ...types],
        enumMap,
        modelMap,
        config,
        true,
      );
      const filePath = resolvePath(outputDir, `input_${io.name}.ts`);
      await writeTsFile({ filePath, content, config });
      inputTypeFiles.push(filePath);
    }

    // 6) Generate output object files
    const outputTypeFiles: string[] = [];
    for (const oo of outputObjectTypes) {
      const content = generateComplexTypeInline(
        oo,
        [...models, ...types],
        enumMap,
        modelMap,
        config,
        false,
      );
      const filePath = resolvePath(outputDir, `output_${oo.name}Output.ts`);
      await writeTsFile({ filePath, content, config });
      outputTypeFiles.push(filePath);
    }

    // 7) Generate model action type files
    const actionTypeFiles: string[] = [];

    // Build complete input type map
    const fullInputTypeMap = new Map<string, DMMF.InputType>();
    for (const it of inputObjectTypes) {
      fullInputTypeMap.set(it.name, it);
    }

    // Get mappings between models and their CRUD operations
    const modelMappings = schema.outputObjectTypes.prisma
      .filter((type) => type.fields.some((f) => f.args.length > 0))
      .reduce(
        (acc, type) => {
          type.fields.forEach((field) => {
            if (field.args.length === 0) return;

            const operationMatch = field.name.match(
              /^(findUnique|findFirst|findMany|create|update|upsert|delete|deleteOne|createMany|updateMany|deleteMany)(.+)$/,
            );
            if (!operationMatch) return;

            const [, operation, modelName] = operationMatch;

            if (!acc[modelName]) {
              acc[modelName] = {};
            }

            // Map operation name to its argument types, preserving all argument metadata
            const args = field.args.map((arg) => ({
              ...arg,
              inputTypes: [...arg.inputTypes].map((t) => ({ ...t })),
            }));

            acc[modelName][operation] = args;
          });
          return acc;
        },
        {} as Record<string, Record<string, DMMF.SchemaArg[]>>,
      );

    // Generate action types for each model with the complete input type map
    for (const [modelName, operations] of Object.entries(modelMappings)) {
      for (const [operation, args] of Object.entries(operations)) {
        if (args.length === 0) continue;

        const operationName = operation === "deleteOne" ? "delete" : operation;
        const typeName = modelOperationName(modelName, operationName);

        // Create immutable input type object
        const inputType: Readonly<DMMF.InputType> = {
          name: typeName,
          constraints: {
            maxNumFields: null,
            minNumFields: null,
            fields: [],
          },
          fields: args.map((arg) => ({
            ...arg,
            inputTypes: [...arg.inputTypes].map((t) => ({ ...t })),
          })),
          meta: {
            source: "prisma",
          },
        };

        const content = generateComplexTypeInline(
          inputType,
          [...models, ...types],
          enumMap,
          modelMap,
          {
            ...config,
            maxDepth: config.maxDepth ?? 5, // Explicitly set a cap of 5 for action items unless overridden, as they can get quite deep
          },
          true,
          fullInputTypeMap, // Pass the complete input type map
        );

        const filePath = resolvePath(
          outputDir,
          `action_${modelName}${operationName[0].toUpperCase() + operationName.slice(1)}Args.ts`,
        );
        await writeTsFile({ filePath, content, config });
        actionTypeFiles.push(filePath);
      }
    }

    // 8) Create index.ts that re-exports everything
    const allFiles = [
      ...enumFiles,
      ...modelFiles,
      ...inputTypeFiles,
      ...outputTypeFiles,
      ...actionTypeFiles,
    ];
    const imports = allFiles.map((filePath) => {
      let relativePath = "./" + filePath.replace(outputDir, "").replace(/^\//, "");
      const extension = config.fileExtension === null ? "" : config.fileExtension;
      relativePath = relativePath.replace(/\.ts$/, extension);
      return `export * from "${relativePath}";`;
    });
    const indexContent = imports.join("\n");
    const indexPath = resolvePath(outputDir, "index.ts");
    await writeTsFile({ filePath: indexPath, content: indexContent, config });
  },
});
