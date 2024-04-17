import { Flex, Heading } from "@adobe/react-spectrum";
import { IPageHeaderProps } from "./pageHeader.types";

export const PageHeader = ({ title, children }: IPageHeaderProps) => {
  return (
    <Flex direction="row" justifyContent="space-between">
      <Heading level={2} UNSAFE_style={{ fontWeight: "normal" }}>{title}</Heading>
      <Flex direction="row">{children}</Flex>
    </Flex>
  );
};
