import { Button } from "@chakra-ui/react";
import { Focus } from "lucide-react";
import { useNoteSelectionContext } from "@/stores/note-selection.ts";

export default function KeepTabFocusToggle() {
  const keepFocus = useNoteSelectionContext((state) => state.sync);
  const toggleFocus = useNoteSelectionContext((state) => state.toggleSync);

  const variant = keepFocus ? "surface" : "outline";
  const colorPalette = keepFocus ? "teal" : undefined;

  return (
    <Button
      flex="1"
      colorPalette={colorPalette}
      variant={variant}
      onClick={toggleFocus}
    >
      <Focus />
    </Button>
  );
}
