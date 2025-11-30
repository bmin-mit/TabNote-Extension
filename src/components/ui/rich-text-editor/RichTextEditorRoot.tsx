import RichTextEditor, { useRichTextEditor } from ".";

export default function RichTextEditorRoot({
  children,
}: {
  children?: React.ReactNode;
}) {
  const editor = useRichTextEditor();

  return (
    <RichTextEditor.RootProvider value={editor}>
      {children}
    </RichTextEditor.RootProvider>
  );
}
