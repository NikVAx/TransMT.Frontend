import { Flex } from "@adobe/react-spectrum";
import { IPageContentProps } from "./pageContent.types";

export const PageContent = ({ children }: IPageContentProps) => {
  return (
    <Flex width="100%" direction="column" flex={1}>
      {children}
    </Flex>
  );
};
