import type { HTMLChakraProps } from "@chakra-ui/react";

export function joinProps(
  ...args: (HTMLChakraProps<any> | false | null | undefined)[]
): HTMLChakraProps<any> {
  let obj = {};

  args.forEach((arg) => {
    if (arg) obj = { ...obj, ...arg };
  });

  return obj;
}
