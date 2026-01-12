import { Container } from "@chakra-ui/react";
import TabView from "@/components/tab-view/TabView";
import {
  createNoteVisibilityStore,
  NoteVisibilityContext,
} from "@/store/note-visibility.ts";

export default function App() {
  const noteVisibilityStore = createNoteVisibilityStore();

  return (
    <Container maxW="full" height="vh" padding="2" fontFamily="body">
      <NoteVisibilityContext.Provider value={noteVisibilityStore}>
        <TabView />
      </NoteVisibilityContext.Provider>
    </Container>
  );
}
