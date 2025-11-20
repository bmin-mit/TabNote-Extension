import { chakra } from "@chakra-ui/react";
import { PlateContent } from "platejs/react";

const StyledPlateContent = chakra(PlateContent);

export default function Content({
  ...props
}: React.ComponentProps<typeof PlateContent>) {
  return (
    <StyledPlateContent
      style={{ minHeight: "100px", outline: "none" }}
      placeholder="Type your amazing content here..."
      {...props}
    />
  );
}
