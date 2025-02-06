import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import type { Config } from "../config/config.js";

export async function writeTsFile({
  filePath,
  content,
  config,
}: {
  filePath: string;
  content: string;
  config: Config;
}) {
  let finalContent = content;

  // Insert headerComment (if any)
  if (config.headerComment) {
    const hdr = config.headerComment
      .split("\n")
      .map((x) => `// ${x}`)
      .join("\n");
    finalContent = `${hdr}\n\n${finalContent}`;
  }

  if (!finalContent.trim()) {
    finalContent = "// (auto-generated empty file)\nexport {};";
  }

  // Replace .ts extensions in imports with configured fileExtension
  if (config.fileExtension !== null) {
    finalContent = finalContent.replace(
      /from ["']\.\/.*\.ts["']/g,
      (match) => match.slice(0, -4) + config.fileExtension + '"',
    );
  }

  // Prettier formatting (if configured)
  if (config.prettier) {
    let prettier: typeof import("prettier");
    try {
      prettier = await import("prettier");
    } catch {
      throw new Error("Unable to import Prettier. Is it installed?");
    }
    const opts = config.resolvePrettierConfig ? await prettier.resolveConfig(filePath) : null;

    finalContent = await prettier.format(finalContent, {
      ...opts,
      parser: "typescript",
    });
  }

  // Ensure directory exists
  const dir = dirname(filePath);
  await mkdir(dir, { recursive: true });

  // Replace .ts extension with the configured output extension
  const outputPath = filePath.replace(/\.ts$/, config.outputFileExtension);

  // Write the file
  await writeFile(outputPath, finalContent);
}
