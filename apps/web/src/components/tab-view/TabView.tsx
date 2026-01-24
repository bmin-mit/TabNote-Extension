import {
  Box,
  Container,
  Flex,
  For,
  Show,
  Tabs,
  Text,
  useTabs,
} from "@chakra-ui/react";
import { useCallback } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import QuoteView from "@/components/note-view/QuoteView.tsx";
import { RichTextEditor } from "@/components/rich-text";
import { SettingsDialog } from "@/components/settings-dialog";
import UtilitiesGroup from "@/components/utilities-group/UtilitiesGroup.tsx";
import { useNoteSelectionContext } from "@/stores/note-selection.ts";
import { useNoteVisibilityContext } from "@/stores/note-visibility.ts";
import { CreateNoteDialog } from "../note-action-dialog";
import TabMenu from "./TabMenu";

export default function TabView() {
  const visibility = useNoteVisibilityContext((s) => s.visibility);

  const notes = useNoteSelectionContext((s) => s.notes);
  const currentTab = useNoteSelectionContext((s) => s.selection);
  const setCurrentTab = useNoteSelectionContext((s) => s.setSelection);
  const setCurrentTabByIdx = useNoteSelectionContext(
    (s) => s.setSelectionByIdx,
  );

  const setCurrentTabToLastTab = useCallback(
    () => setCurrentTabByIdx(Math.max(notes.length - 1, 0)),
    [setCurrentTabByIdx, notes.length],
  );

  useHotkeys("alt+1", () => setCurrentTabByIdx(0));
  useHotkeys("alt+2", () => setCurrentTabByIdx(1));
  useHotkeys("alt+3", () => setCurrentTabByIdx(2));
  useHotkeys("alt+4", () => setCurrentTabByIdx(3));
  useHotkeys("alt+5", () => setCurrentTabByIdx(4));
  useHotkeys("alt+6", () => setCurrentTabByIdx(5));
  useHotkeys("alt+7", () => setCurrentTabByIdx(6));
  useHotkeys("alt+8", () => setCurrentTabByIdx(7));
  useHotkeys("alt+9", setCurrentTabToLastTab);

  const tabs = useTabs({
    value: currentTab,
    onValueChange: (d) => setCurrentTab(d.value),
    orientation: "vertical",
  });

  return (
    <Tabs.RootProvider value={tabs} variant="enclosed" h="full" lazyMount>
      <Flex maxW="2xs" w="full" h="full" spaceY="2" direction="column">
        <Box bg="bg.muted" rounded="md">
          <Flex align="center">
            <Text
              fontSize="lg"
              fontWeight="bold"
              p={4}
              color="colorPalette.fg"
              flex="1"
            >
              TabNote
            </Text>

            <SettingsDialog />
            <CreateNoteDialog />
          </Flex>
        </Box>

        <Tabs.List w="full" flex="1">
          <Show when={visibility}>
            <For each={notes}>
              {(note) => (
                <Tabs.Trigger
                  key={note.id}
                  value={note.databaseName}
                  justifyContent="normal"
                  textAlign="left"
                  pr="1"
                >
                  <Text flex="1">{note.displayName}</Text>

                  <TabMenu
                    note={note}
                    hidden={note.databaseName !== tabs.value}
                  />
                </Tabs.Trigger>
              )}
            </For>
          </Show>
          <Tabs.Indicator />
        </Tabs.List>

        <UtilitiesGroup />
      </Flex>

      {visibility ? (
        <For each={notes}>
          {(note) => (
            <Tabs.Content
              key={note.id}
              value={note.databaseName}
              flex="1"
              overflow="auto"
            >
              <Flex direction="column" h="full">
                <Container maxW="breakpoint-md" flex="1" padding="4">
                  <RichTextEditor dbName={note.databaseName} />
                </Container>
              </Flex>
            </Tabs.Content>
          )}
        </For>
      ) : (
        <QuoteView />
      )}
    </Tabs.RootProvider>
  );
}
