import type { Range } from "@tiptap/react";
import { createContext } from "react";

export const RangeContext = createContext<
  [Range | null, React.Dispatch<React.SetStateAction<Range | null>>]
>([null, () => {}]);
