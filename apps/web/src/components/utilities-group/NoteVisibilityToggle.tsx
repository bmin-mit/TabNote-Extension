import { Button } from "@chakra-ui/react";
import { Eye, EyeOff } from "lucide-react";
import { useNoteVisibilityContext } from "@/stores/note-visibility.ts";

export default function NoteVisibilityToggle() {
  const visibility = useNoteVisibilityContext((s) => s.visibility);
  const toggleVisibility = useNoteVisibilityContext((s) => s.toggleVisibility);

  const variant = visibility ? "surface" : "outline";
  const colorPalette = visibility ? "teal" : undefined;

  return (
    <Button
      colorPalette={colorPalette}
      variant={variant}
      flex="1"
      onClick={toggleVisibility}
    >
      {visibility ? <Eye /> : <EyeOff />}
    </Button>
  );
}
