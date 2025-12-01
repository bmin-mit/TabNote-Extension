import { useTunnelContext } from "./TunnelContext";

export default function SlashCommandsTunnelIn({
  children,
}: React.PropsWithChildren) {
  const tunnel = useTunnelContext();
  return <tunnel.In>{children}</tunnel.In>;
}
