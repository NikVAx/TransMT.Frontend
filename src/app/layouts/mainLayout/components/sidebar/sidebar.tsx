import { memo } from "react";
import { View } from "@adobe/react-spectrum";
import { useMainLayout } from "../../context/mainLayout.hooks";
import { SidePanelTree } from "./components";
import { SidePanelProvider } from "./context/sidebar.provider";

export const Sidebar = memo(() => {
  const { isSidebarOpen } = useMainLayout();

  return (
    <View
      paddingTop="size-10"
      backgroundColor="gray-100"
      gridArea="sidebar"
      overflow={isSidebarOpen ? "auto" : "hidden"}
      height="100%"
      width="100%"
    >
      <SidePanelProvider>
        <SidePanelTree />
      </SidePanelProvider>
    </View>
  );
});
