import { Container } from "@chakra-ui/react";
import { useEffect } from "react";
import TabView from "@/components/tab-view/TabView";
import {
  createNoteSelectionStore,
  NoteSelectionContext,
} from "@/stores/note-selection.ts";
import {
  createNoteVisibilityStore,
  NoteVisibilityContext,
} from "@/stores/note-visibility.ts";

export default function App() {
  const noteVisibilityStore = createNoteVisibilityStore();
  const tabSelectionStore = createNoteSelectionStore();

  useEffect(() => {
    (async () => await tabSelectionStore.getState().init())();
  }, [tabSelectionStore.getState]);

  return (
    <Container maxW="full" height="vh" padding="2" fontFamily="body">
      <NoteVisibilityContext.Provider value={noteVisibilityStore}>
        <NoteSelectionContext.Provider value={tabSelectionStore}>
          <TabView />
        </NoteSelectionContext.Provider>
      </NoteVisibilityContext.Provider>
    </Container>
  );
}
