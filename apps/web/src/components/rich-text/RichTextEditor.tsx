import { SlashCommands } from "@bmin-mit/tiptap-slash-commands";
import { For } from "@chakra-ui/react";
import { richTextCommands } from "@/components/rich-text/commands.ts";
import RichTextEditor from "@/components/ui/rich-text-editor";
import OfflineExtension from "@/components/ui/rich-text-editor/OfflineExtension";

export default function RichText({ dbName }: { dbName: string }) {
  return (
    <RichTextEditor.Root
      options={{ extensions: [OfflineExtension.configure({ dbName })] }}
    >
      <RichTextEditor.Content h="full" />
      <RichTextEditor.BubbleMenu />
      <RichTextEditor.Commands>
        <SlashCommands.List>
          <RichTextEditor.CommandsEmpty>No result</RichTextEditor.CommandsEmpty>
          <For each={richTextCommands}>
            {(command) => {
              const Icon = command.icon;
              return (
                <RichTextEditor.CommandsItem
                  key={command.value}
                  value={command.value}
                  keywords={command.searchTerms}
                  onCommand={command.execute}
                >
                  <Icon />
                  {command.label}
                </RichTextEditor.CommandsItem>
              );
            }}
          </For>
        </SlashCommands.List>
      </RichTextEditor.Commands>
    </RichTextEditor.Root>
  );
}
