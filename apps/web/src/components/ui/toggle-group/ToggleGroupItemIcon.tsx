import { ToggleGroup, useToggleGroupContext } from "@ark-ui/react";
import { IconButton } from "@chakra-ui/react";
import { useMemo } from "react";

export default function ToggleGroupItemIcon({
  value,
  disabled,
  asChild,
  ...props
}: React.ComponentProps<typeof IconButton> &
  React.ComponentProps<typeof ToggleGroup.Item>) {
  const toggleGroup = useToggleGroupContext();
  const itemState = toggleGroup.getItemState({ value });

  const variant = useMemo(
    () => (itemState.pressed ? "solid" : "outline"),
    [itemState.pressed],
  );

  return (
    <ToggleGroup.Item value={value} disabled={disabled} asChild>
      <IconButton
        {...props}
        disabled={disabled}
        asChild={asChild}
        variant={variant}
      />
    </ToggleGroup.Item>
  );
}
