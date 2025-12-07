import { createContext, type Dispatch, type SetStateAction } from "react";

export const CommandsValueContext = createContext<
  [string, Dispatch<SetStateAction<string>>]
>(["", () => {}]);
