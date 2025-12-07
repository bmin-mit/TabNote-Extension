import { TunnelContext } from "./contexts/TunnelContext";

export const SlashCommandsTunnelIn: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <TunnelContext.Consumer>
      {(tunnel) => <tunnel.In>{children}</tunnel.In>}
    </TunnelContext.Consumer>
  );
};

SlashCommandsTunnelIn.displayName = "SlashCommandsTunnelIn";
