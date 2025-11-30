import RichTextEditor from "../ui/rich-text-editor";

export default function RichText({ dbName }: { dbName: string }) {
  return (
    <RichTextEditor.Root>
      <RichTextEditor.Content />
      <RichTextEditor.BubbleMenu />
    </RichTextEditor.Root>
  );
  // return (
  //   <Plate.Root>
  //     <Plate.Content spellCheck={false} />
  //   </Plate.Root>
  // );``
}
