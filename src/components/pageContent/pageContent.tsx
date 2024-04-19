import { Flex } from "@adobe/react-spectrum";
import { IPageContentProps } from "./pageContent.types";

export const PageContent = ({
  direction = "column",
  children,
}: IPageContentProps) => {
  return (
    <Flex width="100%" direction={direction} flex={1} gap="10px">
      {children}
    </Flex>
  );
};
