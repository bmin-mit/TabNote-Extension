import { ReactRenderer } from "@tiptap/react";
import type { SuggestionOptions } from "@tiptap/suggestion";
import tippy, { type Instance, type Props } from "tippy.js";
import { SlashCommandsTunnelOut } from "../components/SlashCommandsTunnelOut";

const renderItems: SuggestionOptions["render"] = (
  elementRef?: React.RefObject<Element> | null,
) => {
  let component: ReactRenderer | null = null;
  let popup: Instance<Props>[] | null = null;

  return {
    onStart: (props) => {
      const { editor, clientRect } = props;

      component = new ReactRenderer(SlashCommandsTunnelOut, {
        editor: editor,
        props,
      });

      const { selection } = editor.state;
      const parentNode = selection.$from.node(selection.$from.depth);
      const blockType = parentNode.type.name;

      if (blockType === "codeBlock") {
        return false;
      }

      popup = tippy("body", {
        getReferenceClientRect: clientRect as () => DOMRect,
        appendTo: () => (elementRef ? elementRef.current : document.body),
        content: component.element,
        showOnCreate: true,
        interactive: true,
        trigger: "manual",
        placement: "bottom-start",
      });
    },

    onUpdate: (props) => {
      component?.updateProps(props);

      popup?.[0]?.setProps({
        getReferenceClientRect: props.clientRect as () => DOMRect,
      });
    },

    onKeyDown: (props) => {
      if (props.event.key === "Escape") {
        popup?.[0]?.hide();

        return true;
      }

      // @ts-expect-error: Unclear typing for component.ref
      return component?.ref?.onKeyDown(props);
    },

    onExit: () => {
      popup?.[0]?.destroy();
      component?.destroy();
    },
  };
};

export default renderItems;
