import {
  BasicBlocksPlugin,
  BoldPlugin,
  CodePlugin,
  HighlightPlugin,
  ItalicPlugin,
  KbdPlugin,
  StrikethroughPlugin,
  SubscriptPlugin,
  SuperscriptPlugin,
  UnderlinePlugin,
} from "@platejs/basic-nodes/react";
import {
  FontBackgroundColorPlugin,
  FontColorPlugin,
  FontFamilyPlugin,
  FontSizePlugin,
  LineHeightPlugin,
  TextAlignPlugin,
} from "@platejs/basic-styles/react";
import { CalloutPlugin } from "@platejs/callout/react";
import {
  CodeBlockPlugin,
  CodeLinePlugin,
  CodeSyntaxPlugin,
} from "@platejs/code-block/react";
import { DatePlugin } from "@platejs/date/react";
import { IndentPlugin } from "@platejs/indent/react";
import { ColumnPlugin } from "@platejs/layout/react";
import { LinkPlugin } from "@platejs/link/react";
import {
  BulletedListPlugin,
  ListItemPlugin,
  ListPlugin,
  NumberedListPlugin,
  TaskListPlugin,
} from "@platejs/list-classic/react";
import { EquationPlugin, InlineEquationPlugin } from "@platejs/math/react";
import {
  AudioPlugin,
  FilePlugin,
  ImagePlugin,
  MediaEmbedPlugin,
  PlaceholderPlugin,
  VideoPlugin,
} from "@platejs/media/react";
import { MentionInputPlugin, MentionPlugin } from "@platejs/mention/react";
import { TablePlugin } from "@platejs/table/react";
import { TocPlugin } from "@platejs/toc/react";
import { TogglePlugin } from "@platejs/toggle/react";
import { ExitBreakPlugin } from "platejs";
import { ParagraphPlugin } from "platejs/react";
import { AutoformatKit } from "./kits/Autoformat";
import { BasicBlocksKit } from "./kits/BasicBlocksKit";

export const defaultPlugins = [
  // Basic Nodes
  ...BasicBlocksKit,

  // Marks
  BoldPlugin,
  ItalicPlugin,
  UnderlinePlugin,
  CodePlugin,
  HighlightPlugin,
  KbdPlugin,
  StrikethroughPlugin,
  SubscriptPlugin,
  SuperscriptPlugin,

  // CalloutPlugin,

  // Code Block
  CodeBlockPlugin,
  CodeLinePlugin,
  CodeSyntaxPlugin,

  ColumnPlugin,

  DatePlugin,

  // Math
  EquationPlugin,
  InlineEquationPlugin,

  LinkPlugin,

  // Lists
  ListPlugin,
  BulletedListPlugin,
  NumberedListPlugin,
  TaskListPlugin,
  ListItemPlugin,

  // Media
  ImagePlugin,
  VideoPlugin,
  AudioPlugin,
  FilePlugin,
  MediaEmbedPlugin,
  PlaceholderPlugin,

  // Mention
  MentionPlugin,
  MentionInputPlugin,

  TablePlugin,

  TocPlugin,

  TogglePlugin,

  // Styles
  FontColorPlugin,
  FontBackgroundColorPlugin,
  FontFamilyPlugin,
  FontSizePlugin,
  LineHeightPlugin,
  TextAlignPlugin,
  IndentPlugin,

  // Functionalities
  // Utils
  ExitBreakPlugin,
  ...AutoformatKit,
];
