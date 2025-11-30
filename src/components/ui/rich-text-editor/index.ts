import Root from "./RichTextEditorRoot";
import RootProvider from "./RichTextEditorRootProvider";
import Content from "./RichTextEditorContent";
import BubbleMenu from "./RichTextEditorBubbleMenu";

export { default as useRichTextEditor } from "./useRichTextEditor";
export { default as useRichTextEditorContext } from "./useRichTextEditorContext";

const RichTextEditor = {
  Root,
  RootProvider,
  Content,
  BubbleMenu,
};

export default RichTextEditor;
