import { useEditorState, type Editor } from "@tiptap/react";
import { useState } from "react";

export function useSelectionChange(
  editor: Editor,
  callback: (props: { editor: Editor }) => void,
) {
  const [lastSelection, setLastSelection] = useState<{
    from: number | null;
    to: number | null;
  }>({ from: null, to: null });

  const selection = useEditorState({
    editor,
    selector(state) {
      return state.editor.state.selection;
    },
  });

  if (
    selection.from !== lastSelection.from ||
    selection.to !== lastSelection.to
  ) {
    setLastSelection({ from: selection.from, to: selection.to });
    callback({ editor });
  }
}
