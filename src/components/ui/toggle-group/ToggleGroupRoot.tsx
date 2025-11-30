import { ToggleGroup as ArkToggleGroup } from "@ark-ui/react";
import { ButtonGroup, chakra } from "@chakra-ui/react";
import type React from "react";

const StyledToggleGroupRoot = chakra(ArkToggleGroup.Root, {});

export default function ToggleGroupRoot({
  ...props
}: React.ComponentProps<typeof StyledToggleGroupRoot>) {
  return <StyledToggleGroupRoot {...props} />;
}
