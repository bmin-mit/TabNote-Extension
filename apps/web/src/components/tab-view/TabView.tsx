import {
  Box,
  Container,
  Flex,
  For,
  Grid,
  Show,
  Tabs,
  Text,
  useTabs,
} from "@chakra-ui/react";
import QuoteView from "@/components/note-view/QuoteView.tsx";
import { RichTextEditor } from "@/components/rich-text";
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

  const tabs = useTabs({
    value: currentTab,
    onValueChange: (d) => setCurrentTab(d.value),
    orientation: "vertical",
  });

  return (
    <Tabs.RootProvider value={tabs} variant="enclosed" h="full" lazyMount>
      <Grid maxW="2xs" w="full" my="0" gap="2" templateRows="auto 1fr auto">
        <Box bg="bg.muted" rounded="md">
          <Flex align="center" justify="space-between">
            <Text fontSize="lg" fontWeight="bold" p="4" color="colorPalette.fg">
              TabNote
            </Text>
          </Flex>
        </Box>

        <Flex
          bg="bg.muted"
          h="full"
          rounded="md"
          direction="column"
          overflow="hidden"
          gap="1"
        >
          <Tabs.List w="full" flex="1" overflowY="auto" bg="transparent">
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

          <CreateNoteDialog mx="1" mb="1" />
        </Flex>

        <UtilitiesGroup />
      </Grid>

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
