import { createContext, type Dispatch, type SetStateAction } from "react";

export const QueryInputContext = createContext<
  [string, Dispatch<SetStateAction<string>>]
>(["", () => {}]);
