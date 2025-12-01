import { useContext, useEffect } from "react";
import { TunnelContext } from "./contexts/TunnelContext";
import { QueryInputContext } from "./contexts/QueryInputContext";
import { RangeContext } from "./contexts/RangeContext";

export default function SlashCommandsTunnelOut() {
  const [query, setQuery] = useContext(QueryInputContext);
  const [range, setRange] = useContext(RangeContext);

  useEffect(() => {
    setQuery(query);
  }, [query, setQuery]);

  useEffect(() => {
    setRange(range);
  }, [range, setRange]);

  useEffect(() => {
    const navigationKeys = ["ArrowUp", "ArrowDown", "Enter"];
    const onKeyDown = (e: KeyboardEvent) => {
      if (navigationKeys.includes(e.key)) {
        e.preventDefault();
        const commandRef = document.querySelector("#slash-commands");

        if (commandRef)
          commandRef.dispatchEvent(
            new KeyboardEvent("keydown", {
              key: e.key,
              cancelable: true,
              bubbles: true,
            }),
          );

        return false;
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <TunnelContext.Consumer>
      {(tunnel) => <tunnel.Out />}
    </TunnelContext.Consumer>
  );
}
