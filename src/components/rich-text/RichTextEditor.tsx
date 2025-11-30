import RichTextEditor from "../ui/rich-text-editor";
import OfflineExtension from "../ui/rich-text-editor/OfflineExtension";

export default function RichText({ dbName }: { dbName: string }) {
  return (
    <RichTextEditor.Root
      options={{ extensions: [OfflineExtension.configure({ dbName })] }}
    >
      <RichTextEditor.Content h="full" />
      <RichTextEditor.BubbleMenu />
    </RichTextEditor.Root>
  );
}
