import { Flex } from "@adobe/react-spectrum";
import { IPageActionsProps } from "./pageActions.types";

export const PageActions = ({ children }: IPageActionsProps) => {
    return (
      <Flex width="100%" direction="row">
        {children}
      </Flex>
    );
  };