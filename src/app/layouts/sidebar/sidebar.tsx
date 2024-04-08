import { memo } from "react";
import { View } from "@adobe/react-spectrum";
import { useSidePage } from "../sidePage/sidePage.hooks";

export const Sidebar = memo(() => {
  const { isOpen } = useSidePage();

  return (
    <View
      backgroundColor="gray-100"
      gridArea="sidebar"
      overflow={isOpen ? "auto" : "hidden"}
      height="100%"
      width="100%"
    ></View>
  );
});
