import { SlashCommands } from "@bmin-mit/tiptap-slash-commands";
import type { Editor } from "@tiptap/react";
import { RichTextEditorContext } from "./useRichTextEditorContext";

export default function RichTextEditorRootProvider({
  value,
  children,
}: {
  value: Editor;
  children?: React.ReactNode;
}) {
  return (
    <RichTextEditorContext value={value}>
      <SlashCommands.Root editor={value}>{children}</SlashCommands.Root>
    </RichTextEditorContext>
  );
}
