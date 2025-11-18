// biome-ignore lint/suspicious/noExplicitAny: allow all kinds of functions
export function debounce<T extends (...args: any[]) => void>(
  fn: T,
  delay = 1000,
) {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
