import type { DynamicStyle } from "./schemas";

export function useDynamicStyle<T>(style: DynamicStyle<T>): T {
  return typeof style === "function" ? (style as () => T)() : style;
}
