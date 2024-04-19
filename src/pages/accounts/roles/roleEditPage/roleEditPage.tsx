import { useStore } from "@/app/rootStore";
import { ICreateRoleDto, IPermission } from "@/features";
import {
  BaseButton,
  DataGrid,
  PageActions,
  PageContent,
  PageHeader,
  PageWrapper,
} from "@/components";
import { defineColumns } from "@/components";
import { Form, TextArea, TextField } from "@adobe/react-spectrum";
import { RowSelectedEvent } from "ag-grid-community";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const columnDefs = defineColumns<IPermission>([
    { field: "name", headerName: "Название", checkboxSelection: true },
    { field: "description", headerName: "Описание", flex: 1 },
  ]);

export const RoleEditPage = observer(() => {
  const navigate = useNavigate();

  const [role, setRole] = useState<ICreateRoleDto>({
    name: "",
    description: "",
    permissions: [],
  });

  const { roleStore, permissionStore } = useStore((store) => ({
    roleStore: store.roleStore,
    permissionStore: store.permissionStore
  }));

  const [selectedRows, setSelectedRows] = useState<IPermission[]>([]);

  const onRowSelectedHandler = (e: RowSelectedEvent<IPermission, any>) => {
    setSelectedRows(e.api.getSelectedRows());
  };

  const clearRowSelectionHandler = () => {
    setSelectedRows([]);
  };

  useEffect(() => {
    permissionStore.fetchPermissions();
  }, []);

  return (
    <PageWrapper>
      <PageHeader title="РЕДАКТИРОВАНИЕ РОЛИ" />
      <PageActions>
        <BaseButton
          variant="accent"
          children="Назад к списку"
          onPress={() => navigate("/accounts/roles")}
        />
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
            onPress={() => console.log(role)}
          />
        </Form>
        <DataGrid
          flexBasis="50%"
          columnDefs={columnDefs}
          onRowSelected={onRowSelectedHandler}
          onRowDataUpdated={clearRowSelectionHandler}
          rowData={permissionStore.permissions}
        />
      </PageContent>
    </PageWrapper>
  );
});
