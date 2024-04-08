import { Flex, View } from "@adobe/react-spectrum";
import { memo } from "react";
import { TriggerMenuButton } from "../triggerMenuButton";

export const Header = memo(() => {
  return (
    <View
      zIndex={2}
      colorVersion={6}
      backgroundColor="gray-200"
      gridArea="header"
      height="100%"
      paddingX="10px"
    >
      <Flex
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        height="100%"
      >
        <Flex>
          <TriggerMenuButton />
        </Flex>
      </Flex>
    </View>
  );
});
