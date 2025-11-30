import { EditorContent } from "@tiptap/react";
import { useRichTextEditorContext } from ".";
import { Prose } from "../prose";

export default function RichTextEditorContent() {
  const editor = useRichTextEditorContext();

  return (
    <Prose>
      <EditorContent spellCheck={false} editor={editor} />
    </Prose>
  );
}
