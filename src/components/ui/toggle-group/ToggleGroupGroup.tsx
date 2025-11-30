import { ButtonGroup } from "@chakra-ui/react";

export default function ToggleGroupGroup(
  props: Omit<
    React.ComponentProps<typeof ButtonGroup>,
    "variant" | "colorPalette"
  >,
) {
  return <ButtonGroup attached colorPalette="gray" {...props}></ButtonGroup>;
}
