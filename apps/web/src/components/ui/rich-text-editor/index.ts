import BubbleMenu from "./RichTextEditorBubbleMenu";
import Commands from "./RichTextEditorCommands.tsx";
import CommandsItem from "./RichTextEditorCommandsItem.tsx";
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
  Commands,
  CommandsItem,
};

export default RichTextEditor;
