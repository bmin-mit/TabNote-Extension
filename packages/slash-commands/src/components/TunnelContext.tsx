import { createContext, useContext } from "react";
import type { Tunnel } from "../types/tunnel";

export const TunnelContext = createContext<Tunnel | null>(null);

export function useTunnelContext() {
  const tunnel = useContext(TunnelContext);

  if (!tunnel) {
    throw new Error("useTunnelContext must be used within a TunnelProvider");
  }

  return tunnel;
}
