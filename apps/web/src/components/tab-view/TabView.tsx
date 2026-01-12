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
import { useLiveQuery } from "dexie-react-hooks";
import { useEffect } from "react";
import QuoteView from "@/components/note-view/QuoteView.tsx";
import { RichTextEditor } from "@/components/rich-text";
import UtilitiesGroup from "@/components/utilities-group/UtilitiesGroup.tsx";
import { db } from "@/lib/repositories/db";
import { useNoteVisibilityContext } from "@/store/note-visibility.ts";
import { CreateNoteDialog } from "../note-action-dialog";
import TabMenu from "./TabMenu";

export default function TabView() {
  const notes = useLiveQuery(() => db.notes.toArray());
  const visibility = useNoteVisibilityContext((s) => s.visibility);

  const tabs = useTabs({
    orientation: "vertical",
  });

  useEffect(() => {
    if (tabs.value === null && notes?.length) {
      tabs.setValue(notes[0].databaseName);
    }
  }, [notes, tabs.value, tabs.setValue]);

  return (
    <Tabs.RootProvider value={tabs} variant="enclosed" h="full" lazyMount>
      <Flex maxW="2xs" w="full" h="full" spaceY="2" direction="column">
        <Box bg="bg.muted" rounded="md">
          <Flex align="center" justify="space-between">
            <Text fontSize="lg" fontWeight="bold" p={4} color="colorPalette.fg">
              TabNote
            </Text>

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
