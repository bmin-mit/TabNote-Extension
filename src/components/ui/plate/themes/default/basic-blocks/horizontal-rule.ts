import { useFocused, useReadOnly, useSelected } from "platejs/react";
import type { Theme } from "@/components/ui/plate/themes";
import { joinProps } from "@/utils";

export const defaultHorizontalRuleTheme: Theme["elements"]["basic"]["horizontalRule"] =
  () => {
    const readOnly = useReadOnly();
    const selected = useSelected();
    const focused = useFocused();

    return joinProps(
      {
        h: "0.5",
        rounded: "sm",
        border: "none",
        bg: "muted",
        bgClip: "content",
      },
      selected &&
        focused && {
          focusRingWidth: "2",
          focusRingOffset: "2",
        },
      !readOnly && { cursor: "pointer" },
    );
  };
