import { Command } from "cmdk";
import { SlashCommandsInput } from "./SlashCommandsInput.tsx";
import { SlashCommandsTunnelIn } from "./SlashCommandsTunnelIn";

export const SlashCommandsCommands: React.FC<
  React.ComponentProps<typeof Command>
> = ({ children, ref, ...props }) => {
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
        <SlashCommandsInput />
        {children}
      </Command>
    </SlashCommandsTunnelIn>
  );
};

SlashCommandsCommands.displayName = "SlashCommandsCommands";
