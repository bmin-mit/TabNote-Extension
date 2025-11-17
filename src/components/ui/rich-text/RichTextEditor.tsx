"use client";

import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";

const DEFAULT_EDITOR_STYLE: React.CSSProperties = {
  width: "100%",
  height: "100%",
  outline: "none",
};

export default function RichTextEditor({
  style,
  namespace = "TabNoteGlobalEditor",
}: {
  style?: React.CSSProperties;
  namespace?: string;
}) {
  const INITIAL_CONFIG = {
    namespace,
    theme: {},
    onError(error: Error) {
      throw error;
    },
  };

  return (
    <LexicalComposer initialConfig={INITIAL_CONFIG}>
      <RichTextPlugin
        contentEditable={
          <ContentEditable style={{ ...DEFAULT_EDITOR_STYLE, ...style }} />
        }
        ErrorBoundary={LexicalErrorBoundary}
      />
      <HistoryPlugin />
      <AutoFocusPlugin />
    </LexicalComposer>
  );
}
