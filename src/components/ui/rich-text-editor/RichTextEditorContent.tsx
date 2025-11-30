import { EditorContent } from "@tiptap/react";
import { useRichTextEditorContext } from ".";
import { Prose } from "../prose";

export default function RichTextEditorContent(
  props: Omit<React.ComponentProps<typeof Prose>, "children">,
) {
  const editor = useRichTextEditorContext();

  return (
    <Prose {...props}>
      <EditorContent
        spellCheck={false}
        editor={editor}
        style={{ height: "100%" }}
      />
    </Prose>
  );
}
