import { TunnelContext } from "./contexts/TunnelContext";

export default function SlashCommandsTunnelIn({
  children,
}: React.PropsWithChildren) {
  return (
    <TunnelContext.Consumer>
      {(tunnel) => <tunnel.In>{children}</tunnel.In>}
    </TunnelContext.Consumer>
  );
}
