import { useStore } from "@/app/rootStore";
import { ICreateRoleDto, IEditRoleDto, IPermission } from "@/features";
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
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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

export const RoleEditPage = observer(() => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [role, setRole] = useState<IEditRoleDto>({
    name: "",
    description: "",
    permissions: [],
  });

  

  const { roleStore, permissionStore } = useStore((store) => ({
    roleStore: store.roleStore,
    permissionStore: store.permissionStore,
  }));



  const onFirstDataRendered = useCallback((params: any) => {
    console.log("onFirstDataRendered.role", role);
    const nodesToSelect : any[] = [];
    params.api.forEachNode((node : any) => {
      if (node.data && role.permissions.some(id => {
        return id === node.data.id
      }) ) {
        nodesToSelect.push(node);
      }
    });
    params.api.setNodesSelected({ nodes: nodesToSelect, newValue: true });
  }, [role]);

  const onRowSelectedHandler = (e: RowSelectedEvent<IPermission, any>) => {
    console.log("getSelectedRows",e.api.getSelectedRows());
    console.log(role.permissions)
    
    setRole((prev) => ({
      ...prev,
      permissions: e.api.getSelectedRows().map((value) => value.name),
    }));
    
  };

  const loadData = async () => {
    const role = await roleStore.getRoleById(id as string);

    if (role !== null) {
      setRole({
        name: role.name,
        description: role.description,
        permissions: role.permissions
      })

      permissionStore.fetchPermissions();
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  const createRoleHandler = async () => {
    const created = await roleStore.createRole(role);

    if (created !== null) {
      navigate(`/accounts/roles/${created.id}/edit`)
    }
  };

  return (
    <PageWrapper>
      <PageHeader title="РЕДАКТИРОВАНИЕ РОЛИ" />
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
          onFirstDataRendered={onFirstDataRendered}
          onRowSelected={onRowSelectedHandler}
          rowData={permissionStore.permissions}      
        />
      </PageContent>
    </PageWrapper>
  );
});
