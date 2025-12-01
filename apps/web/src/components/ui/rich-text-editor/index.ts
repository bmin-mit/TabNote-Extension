import BubbleMenu from "./RichTextEditorBubbleMenu";
import Content from "./RichTextEditorContent";
import Root from "./RichTextEditorRoot";
import RootProvider from "./RichTextEditorRootProvider";

export { default as useRichTextEditor } from "./useRichTextEditor";
export { default as useRichTextEditorContext } from "./useRichTextEditorContext";

const RichTextEditor = {
  Root,
  RootProvider,
  Content,
  BubbleMenu,
};

export default RichTextEditor;
