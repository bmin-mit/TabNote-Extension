import type { Editor, Range } from "@tiptap/react";
import { Command } from "cmdk";
import { useContext } from "react";
import { EditorContext } from "./contexts/EditorContext";
import { RangeContext } from "./contexts/RangeContext";

export const SlashCommandsItem: React.FC<
  Omit<React.ComponentProps<typeof Command.Item>, "onSelect"> & {
    onCommand?: ({ editor, range }: { editor: Editor; range: Range }) => void;
  }
> = ({ onCommand, children, ...props }) => {
  const editor = useContext(EditorContext);
  const [range] = useContext(RangeContext);

  if (!range) return null;

  return (
    <Command.Item {...props} onSelect={() => onCommand?.({ editor, range })}>
      {children}
    </Command.Item>
  );
};

SlashCommandsItem.displayName = "SlashCommandsItem";
