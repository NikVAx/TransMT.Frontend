import { ButtonGroup, Flex, Text } from "@adobe/react-spectrum";
import { BaseButton } from "../baseButton";
import ChevronLeft from "@spectrum-icons/workflow/ChevronLeft";
import ChevronRight from "@spectrum-icons/workflow/ChevronRight";
import { observer } from "mobx-react-lite";
import { IPaginator } from "./pagination.types";

export const Pagination = observer(
  ({ paginator }: { paginator: IPaginator }) => {
    return (
      <Flex direction="row" alignItems="end" justifyContent="space-between">
        <ButtonGroup>
          <BaseButton
            variant="primary"
            onPress={() => {
              paginator.prev();
            }}
          >
            <ChevronLeft />
          </BaseButton>

          <BaseButton
            variant="primary"
            onPress={() => {
              paginator.next();
            }}
          >
            <ChevronRight />
          </BaseButton>
        </ButtonGroup>

        <Text>
          Страница {paginator.getPage()} из {paginator.getPageCount()}
        </Text>
      </Flex>
    );
  }
);
