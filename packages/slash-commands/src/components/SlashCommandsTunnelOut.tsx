import { useTunnelContext } from "./TunnelContext";

export default function SlashCommandsTunnelOut() {
  const tunnel = useTunnelContext();

  return <tunnel.Out />;
}
