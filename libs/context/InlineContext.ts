import type { Config } from "../config/config.ts";
import { CUSTOM_TYPES } from "../consts/CUSTOM_TYPES.ts";

export class InlineContext {
  visitedTypes = new Set<string>();
  usedCustomTypes = new Set<keyof typeof CUSTOM_TYPES>();

  constructor(public config: Config) {}

  markVisited(name: string) {
    this.visitedTypes.add(name);
  }
  isVisited(name: string) {
    return this.visitedTypes.has(name);
  }

  addCustomTypeUsage(type: keyof typeof CUSTOM_TYPES) {
    this.usedCustomTypes.add(type);
  }
}
