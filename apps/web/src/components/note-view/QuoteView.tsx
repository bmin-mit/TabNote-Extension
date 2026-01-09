import { Container, Flex } from "@chakra-ui/react";
import { Blockquote } from "@/components/ui/blockquote";
import { getRandomQuote } from "@/utils";

export default function QuoteView() {
  const quote = getRandomQuote();

  return (
    <Flex direction="column" w="full" h="full">
      <Container maxW="breakpoint-md" flex="1" padding="4" mx="auto">
        <Flex h="full">
          <Blockquote cite={quote.author} my="auto" mx="auto">
            {quote.text}
          </Blockquote>
        </Flex>
      </Container>
    </Flex>
  );
}
