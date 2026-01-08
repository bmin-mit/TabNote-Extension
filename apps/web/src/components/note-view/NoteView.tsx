import { Box, Container, Flex } from "@chakra-ui/react";
import { RichTextEditor } from "@/components/rich-text";
import { Blockquote } from "@/components/ui/blockquote";
import { useNoteVisibility } from "@/store/note-visibility.ts";
import { getRandomQuote } from "@/utils";

export default function NoteView({ noteName }: { noteName: string }) {
  const visibility = useNoteVisibility((state) => state.visibility);
  const quote = getRandomQuote();

  return (
    <Flex direction="column" h="full">
      <Container maxW="breakpoint-md" flex="1" padding="4">
        {visibility ? (
          <RichTextEditor dbName={noteName} />
        ) : (
          <Flex h="full">
            <Blockquote cite={quote.author} my="auto" mx="auto">
              {quote.text}
            </Blockquote>
          </Flex>
        )}
      </Container>
    </Flex>
  );
}
