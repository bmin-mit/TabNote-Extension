import { Command } from "cmdk";
import { SlashCommandsCommands } from "./SlashCommandsCommands";
import { SlashCommandsItem } from "./SlashCommandsItem";
import { SlashCommandsRoot } from "./SlashCommandsRoot";

export const SlashCommands = {
  Root: SlashCommandsRoot,
  Commands: SlashCommandsCommands,
  Item: SlashCommandsItem,
  List: Command.List,
  Empty: Command.Empty,
  Loading: Command.Loading,
  Separator: Command.Separator,
  Group: Command.Group,
};
