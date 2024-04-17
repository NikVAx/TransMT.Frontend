import { Flex, View } from "@adobe/react-spectrum";
import { PropsWithChildren } from "react";

export const PageWrapper = ({ children }: PropsWithChildren) => {
  return (
    <View height="100%" width="100%" padding="12px 20px 12px 20px">
      <Flex height="100%" width="100%" direction="column" rowGap="size-50">
        {children}
      </Flex>
    </View>
  );
};
