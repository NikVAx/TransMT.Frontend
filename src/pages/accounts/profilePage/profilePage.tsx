import { useStore } from "@/app/rootStore";
import { DataGrid } from "@/shared/components/dataGrid/dataGrid";
import { PageWrapper } from "@/shared/components/pageWrapper/pageWrapper";
import {
  ActionGroup,
  Flex,
  Item,
  ListView,
  NumberField,
  Text,
} from "@adobe/react-spectrum";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";

const ACTION_KEYS = {
  LOAD_BUILDINGS: "loadBuildings",
  PAGINATE: "paginate",
};

export const ProfilePage = observer(() => {
  const { authStore, buildingStore } = useStore((store) => ({
    authStore: store.authStore,
    buildingStore: store.buildingStore,
  }));

  const [gridColumns, setGridColumns] = useState<any[]>([{ field: "id" }]);
  const [pageOptions, setPageOptions] = useState({
    pageIndex: 0,
    pageSize: 12,
  });

  useEffect(() => {
    buildingStore.pageOptions = pageOptions;
  }, [pageOptions]);

  return (
    <PageWrapper>
      <Flex direction="column" gap="8px" width="100%" height="100%">
        <Text>USERNAME: {authStore.getUser().username}</Text>
        <Text>EMAIL: {authStore.getUser().email}</Text>
        {true ? null : (
          <>
            <Text>ROLES</Text>
            <ListView aria-label="roles">
              {authStore.getUser().roles.map((value) => {
                return <Item key={`${value.id}`}>{value.name}</Item>;
              })}
            </ListView>
            <Text>PERMISSIONS</Text>
            <ListView aria-label="permissions">
              {authStore.permissions.map((value) => {
                return <Item key={`${value}`}>{value}</Item>;
              })}
            </ListView>
          </>
        )}
        <NumberField
          minValue={0}
          onChange={(value) =>
            setPageOptions({ pageIndex: value, pageSize: pageOptions.pageSize })
          }
          value={pageOptions.pageIndex}
          label="PageIndex"
        />
        <NumberField
          minValue={1}
          onChange={(value) =>
            setPageOptions({
              pageIndex: pageOptions.pageIndex,
              pageSize: value,
            })
          }
          value={pageOptions.pageSize}
          label="PageSize"
        />
        <ActionGroup
          onAction={(key) => {
            if (key === ACTION_KEYS.LOAD_BUILDINGS) {
              buildingStore.loadPage();
            }
          }}
        >
          <Item key={ACTION_KEYS.LOAD_BUILDINGS}>load buildings</Item>
        </ActionGroup>
        <DataGrid rowData={buildingStore.buildings} columnDefs={gridColumns} />
      </Flex>
    </PageWrapper>
  );
});
