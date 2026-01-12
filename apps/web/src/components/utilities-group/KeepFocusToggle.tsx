import { Button } from "@chakra-ui/react";
import { Focus } from "lucide-react";
import type { ComponentProps } from "react";
import { useOpeningNoteStore } from "@/store/opening-note.ts";

interface KeepFocusToggleProps
  extends Omit<ComponentProps<typeof Button>, "children"> {}

export default function KeepFocusToggle(props: KeepFocusToggleProps) {
  const { keepFocus, toggleKeepFocus } = useOpeningNoteStore();
  const variant = keepFocus ? "surface" : "outline";
  const colorPalette = keepFocus ? "teal" : "gray";

  return (
    <Button
      colorPalette={colorPalette}
      variant={variant}
      flex="1"
      {...props}
      onClick={toggleKeepFocus}
    >
      <Focus />
    </Button>
  );
}
