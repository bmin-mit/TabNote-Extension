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
    <RichTextEditorContext value={value}>{children}</RichTextEditorContext>
  );
}
