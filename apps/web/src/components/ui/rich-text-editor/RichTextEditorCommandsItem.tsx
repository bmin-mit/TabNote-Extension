import { SlashCommands } from "@bmin-mit/tiptap-slash-commands";
import { chakra } from "@chakra-ui/react";

const StyledSlashCommandsItem = chakra(SlashCommands.Item, {
  base: {
    display: "flex",
    gap: "3",
    py: "1.5",
    px: "2",
    borderRadius: "l2",
    alignItems: "center",
    "&:is([aria-selected=true], [data-selected=true])": {
      bg: "bg.muted",
    },
    "& > svg": {
      width: 4,
      height: 4,
      color: "fg.muted",
    },
    fontSize: "xs",
  },
});

export default function RichTextEditorCommandsItem(
  props: React.ComponentProps<typeof StyledSlashCommandsItem>,
) {
  return <StyledSlashCommandsItem {...props} />;
}
