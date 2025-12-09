import { SlashCommands } from "@bmin-mit/tiptap-slash-commands";
import { chakra } from "@chakra-ui/react";

const StyledSlashCommandsEmpty = chakra(SlashCommands.Empty, {
  base: {
    py: "1.5",
    px: "2",
    fontSize: "xs",
    color: "fg.muted",
  },
});

export default function RichTextEditorCommandsEmpty(
  props: React.ComponentProps<typeof StyledSlashCommandsEmpty>,
) {
  return <StyledSlashCommandsEmpty {...props} />;
}
