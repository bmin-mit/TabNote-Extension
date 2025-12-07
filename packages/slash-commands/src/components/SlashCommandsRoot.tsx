import type { Editor, Range } from "@tiptap/react";
import { useRef, useState } from "react";
import createTunnel from "tunnel-rat";
import { CommandsValueContext } from "./contexts/CommandsValueContext.ts";
import { EditorContext } from "./contexts/EditorContext";
import { QueryInputContext } from "./contexts/QueryInputContext";
import { RangeContext } from "./contexts/RangeContext";
import { TunnelContext } from "./contexts/TunnelContext";

export const SlashCommandsRoot: React.FC<
  React.PropsWithChildren<{ editor: Editor }>
> = ({ children, editor }) => {
  const tunnel = useRef(createTunnel()).current;
  const queryState = useState<string>("");
  const rangeState = useState<Range | null>(null);
  const commandValueState = useState<string>("");

  return (
    <TunnelContext.Provider value={tunnel}>
      <QueryInputContext.Provider value={queryState}>
        <EditorContext.Provider value={editor}>
          <RangeContext.Provider value={rangeState}>
            <CommandsValueContext.Provider value={commandValueState}>
              {children}
            </CommandsValueContext.Provider>
          </RangeContext.Provider>
        </EditorContext.Provider>
      </QueryInputContext.Provider>
    </TunnelContext.Provider>
  );
};

SlashCommandsRoot.displayName = "SlashCommandsRoot";
