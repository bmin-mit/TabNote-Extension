import { Command } from "cmdk";
import { useContext, useEffect } from "react";
import SlashCommandsTunnelIn from "./SlashCommandsTunnelIn";
import { QueryInputContext } from "./contexts/QueryInputContext";

export default function SlashCommandsCommands({
  ref,
  children,
  ...props
}: React.ComponentProps<typeof Command>) {
  const [query] = useContext(QueryInputContext);

  useEffect(() => {
    console.log("update query", query);
  }, [query]);

  return (
    <SlashCommandsTunnelIn>
      <Command
        id="slash-commands"
        ref={ref}
        onKeyDown={(e) => {
          e.stopPropagation();
        }}
        {...props}
      >
        <QueryInputContext.Consumer>
          {([query, setQuery]) => (
            <Command.Input
              value={query}
              onValueChange={setQuery}
              style={{ display: "none" }}
            />
          )}
        </QueryInputContext.Consumer>
        {children}
      </Command>
    </SlashCommandsTunnelIn>
  );
}
