import type { UseEditorOptions } from "@tiptap/react";
import RichTextEditor, { useRichTextEditor } from ".";

export default function RichTextEditorRoot({
  children,
  options,
}: {
  children?: React.ReactNode;
  options?: UseEditorOptions;
}) {
  const editor = useRichTextEditor(options);

  return (
    <RichTextEditor.RootProvider value={editor}>
      {children}
    </RichTextEditor.RootProvider>
  );
}
