import type { Config } from "../config/config.js";
import { CUSTOM_TYPES } from "../consts/CUSTOM_TYPES.js";

export class InlineContext {
  visitedTypes = new Set<string>();
  usedCustomTypes = new Set<keyof typeof CUSTOM_TYPES>();
  private visited = new Set<string>();
  private currentDepth = 0;

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

  public getCurrentDepth(): number {
    return this.currentDepth;
  }

  public incrementDepth(): void {
    this.currentDepth++;
  }

  public decrementDepth(): void {
    this.currentDepth--;
  }
}
