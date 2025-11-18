import { Container } from "@chakra-ui/react";
import TabView from "@/components/tab-view/TabView";

export default function App() {
	return (
		<Container
			maxW="full"
			height="vh"
			padding="2"
			colorPalette="teal"
			fontFamily="body"
		>
			<TabView />
		</Container>
	);
}
