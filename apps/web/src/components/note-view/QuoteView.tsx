import { Container, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Blockquote } from "@/components/ui/blockquote";
import { getRandomQuote, type Quote } from "@/utils";

export default function QuoteView() {
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    getRandomQuote().then(setQuote);
  }, []);

  return (
    <Flex direction="column" w="full" h="full">
      <Container maxW="breakpoint-md" flex="1" padding="4" mx="auto">
        <Flex h="full">
          <Blockquote cite={quote?.author} my="auto" mx="auto">
            {quote?.text}
          </Blockquote>
        </Flex>
      </Container>
    </Flex>
  );
}
