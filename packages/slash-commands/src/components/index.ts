import { Command } from "cmdk";
import Commands from "./SlashCommandsCommands";
import Item from "./SlashCommandsItem";
import Root from "./SlashCommandsRoot";

const SlashCommands = {
  Root,
  Commands,
  Item,
  List: Command.List,
  Empty: Command.Empty,
  Loading: Command.Loading,
  Separator: Command.Separator,
  Group: Command.Group,
};

export default SlashCommands;
