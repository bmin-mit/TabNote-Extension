import Plate from "../ui/plate";

export default function RichTextEditor({ dbName }: { dbName: string }) {
  return (
    <Plate.Root>
      <Plate.Content spellCheck={false} />
    </Plate.Root>
  );
}
