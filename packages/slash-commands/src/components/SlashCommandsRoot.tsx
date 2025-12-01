import type { Editor, Range } from "@tiptap/react";
import { useRef, useState } from "react";
import createTunnel from "tunnel-rat";
import { EditorContext } from "./contexts/EditorContext";
import { QueryInputContext } from "./contexts/QueryInputContext";
import { RangeContext } from "./contexts/RangeContext";
import { TunnelContext } from "./contexts/TunnelContext";

export default function SlashCommandsRoot({
  children,
  editor,
}: React.PropsWithChildren<{ editor: Editor }>) {
  const tunnel = useRef(createTunnel()).current;
  const queryState = useState<string>("");
  const rangeState = useState<Range | null>(null);

  return (
    <TunnelContext.Provider value={tunnel}>
      <QueryInputContext.Provider value={queryState}>
        <EditorContext.Provider value={editor}>
          <RangeContext.Provider value={rangeState}>
            {children}
          </RangeContext.Provider>
        </EditorContext.Provider>
      </QueryInputContext.Provider>
    </TunnelContext.Provider>
  );
}
