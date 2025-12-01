import createTunnel from "tunnel-rat";
import { TunnelContext } from "./TunnelContext";

export default function SlashCommandsRoot({
  children,
}: React.PropsWithChildren) {
  const tunnel = createTunnel();

  return (
    <TunnelContext.Provider value={tunnel}>{children}</TunnelContext.Provider>
  );
}
