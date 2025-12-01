import { Command } from "cmdk";
import SlashCommandsTunnelIn from "./SlashCommandsTunnelIn";
import { QueryInputContext } from "./contexts/QueryInputContext";

export default function SlashCommandsCommands({
  children,
  ...props
}: React.ComponentProps<typeof Command>) {
  return (
    <SlashCommandsTunnelIn>
      <Command
        id="slash-commands"
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
