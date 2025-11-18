import { Container } from "@chakra-ui/react";
import TabView from "@/components/tab-view/TabView";

export default function Home() {
  return (
    <Container maxW="full" height="vh" padding="2">
      <TabView />
    </Container>
  );
}
