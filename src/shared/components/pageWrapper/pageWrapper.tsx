import { Flex, View } from "@adobe/react-spectrum";
import { PropsWithChildren } from "react";

export const PageWrapper = ({ children }: PropsWithChildren) => {
  <View height="100%" width="100%" padding="10px">
    <Flex height="100%" width="100%" direction="column">
      {children}
    </Flex>
  </View>;
};
