import { SlashCommands } from "@bmin-mit/tiptap-slash-commands";
import { chakra } from "@chakra-ui/react";

const StyledSlashCommands = chakra(SlashCommands.Commands, {
  base: {
    w: "30ch",
    bg: "bg.panel",
    p: "1.5",
    boxShadow: "lg",
    color: "fg",
    display: "flex",
    flexDir: "column",
    gap: "1",
    borderRadius: "l2",
    overflow: "hidden",
    overflowY: "auto",
    userSelect: "none",
    WebkitUserSelect: "none",
  },
});

export default function RichTextEditorCommands(
  props: React.ComponentProps<typeof StyledSlashCommands>,
) {
  return <StyledSlashCommands {...props} />;
}
