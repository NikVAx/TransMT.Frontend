import { PERMISSIONS } from "@/app/constants";
import { useStore } from "@/app/rootStore";
import { BaseButton } from "@/shared";
import { ActionGuard } from "@/shared/components/actionGuard";
import { DataGrid } from "@/shared/components/dataGrid/dataGrid";
import { PageWrapper } from "@/shared/components/pageWrapper/pageWrapper";
import {
  Flex,
  Item,
  ListView,
  NumberField,
  TabList,
  TabPanels,
  Tabs,
  Form,
  Text,
} from "@adobe/react-spectrum";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";

const ACTION_KEYS = {
  BUILDINGS: "buildings",
  GEOZONES: "geoZones",
  USERS: "users",
  ROLES: "roles",
  PERMISSIONS: "permissions",
  PAGINATE: "paginate",
};

export const ProfilePage = observer(() => {
  const {
    authStore,
    userStore,
    buildingStore,
    geoZoneStore,
    roleStore,
    permissionStore,
  } = useStore((store) => ({
    authStore: store.authStore,
    userStore: store.userStore,
    buildingStore: store.buildingStore,
    geoZoneStore: store.geoZoneStore,
    roleStore: store.roleStore,
    permissionStore: store.permissionStore,
  }));

  const [pageOptions, setPageOptions] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  useEffect(() => {
    buildingStore.pageOptions = pageOptions;
    geoZoneStore.pageOptions = pageOptions;
    userStore.pageOptions = pageOptions;
    roleStore.pageOptions = pageOptions;
  }, [pageOptions]);

  useEffect(() => {
    permissionStore.fetchPermissions();
  }, []);

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

        <Form>
          <ActionGuard
            permissions={[
              PERMISSIONS.CAN_GET_USERS,
              PERMISSIONS.CAN_DELETE_USERS,
            ]}
          >
            <BaseButton variant="accent">Получить пользователей</BaseButton>
            <BaseButton variant="negative">Удалить пользователя</BaseButton>
          </ActionGuard>

          <BaseButton
            variant="accent"
            onPress={() => {
              buildingStore.createBuilding({
                name: "default building name",
                location: {
                  lat: 0,
                  lng: 25,
                },
                address: "default address",
                type: "default",
              });
            }}
          >
            Создать здание по умолчанию
          </BaseButton>
        </Form>

        <Tabs height="100%" aria-label="222">
          <TabList>
            <Item
              key={ACTION_KEYS.BUILDINGS}
              aria-label={ACTION_KEYS.BUILDINGS + " tab"}
            >
              Здания
            </Item>
            <Item
              key={ACTION_KEYS.GEOZONES}
              aria-label={ACTION_KEYS.GEOZONES + " tab"}
            >
              Геозоны
            </Item>
            <Item
              key={ACTION_KEYS.USERS}
              aria-label={ACTION_KEYS.USERS + " tab"}
            >
              Пользователи
            </Item>
            <Item
              key={ACTION_KEYS.ROLES}
              aria-label={ACTION_KEYS.ROLES + " tab"}
            >
              Роли
            </Item>
            <Item
              key={ACTION_KEYS.PERMISSIONS}
              aria-label={ACTION_KEYS.PERMISSIONS + " tab"}
            >
              Разрешения
            </Item>
          </TabList>
          <TabPanels height="100%">
            <Item
              key={ACTION_KEYS.BUILDINGS}
              aria-label={ACTION_KEYS.BUILDINGS + " content"}
            >
              <DataGrid
                rowData={buildingStore.buildings}
                columnDefs={[
                  { field: "id" },
                  { field: "name" },
                  {
                    field: "actions",
                    cellRenderer: (props: any) => {
                      return (
                        <BaseButton
                          variant="negative"
                          onPress={() => {
                            buildingStore.deleteBuildings({
                              keys: props.data.id,
                            });
                          }}
                        >
                          X
                        </BaseButton>
                      );
                    },
                  },
                ]}
              />
            </Item>
            <Item
              key={ACTION_KEYS.GEOZONES}
              aria-label={ACTION_KEYS.GEOZONES + " content"}
            >
              <DataGrid
                rowData={geoZoneStore.geoZones}
                columnDefs={[{ field: "id" }, { field: "name" }]}
              />
            </Item>
            <Item
              key={ACTION_KEYS.USERS}
              aria-label={ACTION_KEYS.USERS + " content"}
            >
              <DataGrid
                rowData={userStore.users}
                columnDefs={[
                  { field: "id" },
                  { field: "username" },
                  { field: "email" },
                ]}
              />
            </Item>
            <Item
              key={ACTION_KEYS.ROLES}
              aria-label={ACTION_KEYS.ROLES + " content"}
            >
              <DataGrid
                rowData={roleStore.roles}
                columnDefs={[{ field: "id" }, { field: "name" }]}
              />
            </Item>
            <Item
              key={ACTION_KEYS.PERMISSIONS}
              aria-label={ACTION_KEYS.PERMISSIONS + " content"}
            >
              <DataGrid
                rowData={permissionStore.permissions}
                columnDefs={[{ field: "name" }, { field: "description" }]}
              />
            </Item>
          </TabPanels>
        </Tabs>
      </Flex>
    </PageWrapper>
  );
});
