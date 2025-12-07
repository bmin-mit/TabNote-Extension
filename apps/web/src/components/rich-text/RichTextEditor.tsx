import { SlashCommands } from "@bmin-mit/tiptap-slash-commands";
import { Pilcrow } from "lucide-react";
import RichTextEditor from "../ui/rich-text-editor";
import OfflineExtension from "../ui/rich-text-editor/OfflineExtension";

export default function RichText({ dbName }: { dbName: string }) {
  return (
    <RichTextEditor.Root
      options={{ extensions: [OfflineExtension.configure({ dbName })] }}
    >
      <RichTextEditor.Content h="full" />
      <RichTextEditor.BubbleMenu />
      <RichTextEditor.Commands>
        <SlashCommands.List>
          <RichTextEditor.CommandsItem
            value="abc"
            onCommand={({ editor }) => {
              console.log(editor);
            }}
          >
            <Pilcrow />
            Paragraph
          </RichTextEditor.CommandsItem>
          <RichTextEditor.CommandsItem value="def">
            def
          </RichTextEditor.CommandsItem>
        </SlashCommands.List>
      </RichTextEditor.Commands>
    </RichTextEditor.Root>
  );
}
