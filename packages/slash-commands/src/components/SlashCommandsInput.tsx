import { Command } from "cmdk";
import { QueryInputContext } from "./contexts/QueryInputContext";

export const SlashCommandsInput: React.FC = () => {
  return (
    <QueryInputContext.Consumer>
      {([query, setQuery]) => (
        <Command.Input
          value={query}
          onValueChange={setQuery}
          style={{ display: "none" }}
        />
      )}
    </QueryInputContext.Consumer>
  );
};

SlashCommandsInput.displayName = "SlashCommandsInput";
