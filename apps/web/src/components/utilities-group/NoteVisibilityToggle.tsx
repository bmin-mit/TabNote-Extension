import { Button } from "@chakra-ui/react";
import { Eye, EyeOff } from "lucide-react";
import type { ComponentProps } from "react";
import { useNoteVisibilityContext } from "@/store/note-visibility.ts";

interface NoteVisibilityToggleProps
  extends Omit<ComponentProps<typeof Button>, "children"> {}

export default function NoteVisibilityToggle(props: NoteVisibilityToggleProps) {
  const visibility = useNoteVisibilityContext((s) => s.visibility);
  const toggleVisibility = useNoteVisibilityContext((s) => s.toggleVisibility);

  return (
    <Button variant="outline" flex="1" {...props} onClick={toggleVisibility}>
      {visibility ? <Eye /> : <EyeOff />}
    </Button>
  );
}
