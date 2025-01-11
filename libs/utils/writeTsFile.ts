import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import type { Config } from "../config/config.ts";

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

  await mkdir(dirname(filePath), { recursive: true });
  await writeFile(filePath, finalContent, "utf-8");
}
