import { useStore } from "@/app/rootStore";
import { ICreateRoleDto, IPermission } from "@/features";
import {
  BaseButton,
  DataGrid,
  NavigateButton,
  PageActions,
  PageContent,
  PageHeader,
  PageWrapper,
  defineColumns,
} from "@/components";
import { Form, TextArea, TextField } from "@adobe/react-spectrum";
import { RowSelectedEvent } from "ag-grid-community";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const columnDefs = defineColumns<IPermission>([
  {
    field: "id",
    headerName: "ID",
    checkboxSelection: true,
    filter: true,
    filterParams: { buttons: ["clear", "reset", "apply"] },
  },
  { field: "name", headerName: "Название" },
  { field: "description", headerName: "Описание", flex: 1 },
]);

export const RoleCreatePage = observer(() => {
  const navigate = useNavigate();

  const [role, setRole] = useState<ICreateRoleDto>({
    name: "",
    description: "",
    permissions: [],
  });

  const { roleStore, permissionStore } = useStore((store) => ({
    roleStore: store.roleStore,
    permissionStore: store.permissionStore,
  }));

  const onRowSelectedHandler = (e: RowSelectedEvent<IPermission, any>) => {
    setRole((prev) => ({
      ...prev,
      permissions: e.api.getSelectedRows().map((value) => value.name),
    }));
  };

  const createRoleHandler = async () => {
    const created = await roleStore.createRole(role);

    if (created !== null) {
      navigate(`/accounts/roles/${created.id}/edit`)
    }
  };

  useEffect(() => {
    permissionStore.fetchPermissions();
  }, []);

  return (
    <PageWrapper>
      <PageHeader title="СОЗДАНИЕ РОЛИ" />
      <PageActions>
        <NavigateButton title="Назад к списку" to="/accounts/roles" />
      </PageActions>
      <PageContent direction="row">
        <Form flexBasis="50%">
          <TextField
            label="Название"
            value={role?.name}
            onChange={(value) => setRole((prev) => ({ ...prev, name: value }))}
          />
          <TextArea
            label="Описание"
            value={role?.description}
            onChange={(value) =>
              setRole((prev) => ({ ...prev, description: value }))
            }
          />
          <BaseButton
            variant="accent"
            children="Сохранить"
            onPress={createRoleHandler}
          />
        </Form>
        <DataGrid
          flexBasis="50%"
          columnDefs={columnDefs}
          onRowSelected={onRowSelectedHandler}
          rowData={permissionStore.permissions}
        />
      </PageContent>
    </PageWrapper>
  );
});
