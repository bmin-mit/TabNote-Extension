"use client";

import { db } from "@/lib/repositories/db";
import {
  Box,
  Container,
  Flex,
  For,
  Tabs,
  Text,
  useTabs,
} from "@chakra-ui/react";
import { useLiveQuery } from "dexie-react-hooks";
import { useEffect } from "react";
import { CreateNoteDialog } from "../note-action-dialog";
import { RichTextEditor } from "../rich-text";
import TabMenu from "./TabMenu";

export default function TabView() {
  const notes = useLiveQuery(() => db.notes.toArray());

  const tabs = useTabs({
    orientation: "vertical",
  });

  useEffect(() => {
    if (tabs.value === null && notes?.length) {
      tabs.setValue(notes[0].databaseName);
    }
  }, [notes, tabs, tabs.value]);

  return (
    <Tabs.RootProvider value={tabs} variant="enclosed" h="full" lazyMount>
      <Flex w="2xs" h="full" spaceY="2" direction="column">
        <Box bg="bg.muted" rounded="md">
          <Flex align="center" justify="space-between">
            <Text fontSize="lg" fontWeight="bold" p={4} color="colorPalette.fg">
              TabNote
            </Text>

            <CreateNoteDialog />
          </Flex>
        </Box>

        <Tabs.List w="full" flex="1">
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
          <Tabs.Indicator />
        </Tabs.List>
      </Flex>

      <For each={notes}>
        {(note) => (
          <Tabs.Content
            key={note.id}
            value={note.databaseName}
            flex="1"
            overflow="auto"
          >
            <Flex direction="column" height="full">
              <Container maxW="breakpoint-md" flex="1" padding="4">
                <RichTextEditor
                  dbName={note.databaseName}
                  style={{ height: "100%" }}
                />
              </Container>
            </Flex>
          </Tabs.Content>
        )}
      </For>
    </Tabs.RootProvider>
  );
}
