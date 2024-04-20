import { useStore } from "@/app/rootStore";
import { SubmitDeleteDialog } from "@/dialogs";
import { IRole } from "@/features";
import {
  BaseButton,
  DataGrid,
  NavigateButton,
  PageActions,
  PageContent,
  PageHeader,
  PageWrapper,
  Pagination,
  defineColumns,
} from "@/components";
import { ButtonGroup, DialogTrigger } from "@adobe/react-spectrum";
import { RowSelectedEvent } from "ag-grid-community";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const RolesViewPage = observer(() => {
  const navigate = useNavigate();

  const columnDefs = defineColumns<IRole & any>([
    { field: "id", headerName: "ID", checkboxSelection: true },
    { field: "name", headerName: "Название" },
    { field: "description", headerName: "Описание", flex: 1 },
    {
      field: "actions",
      flex: 1,
      headerName: "Действия",
      cellRenderer: (props: any) => {
        return (
          <ButtonGroup>
            <BaseButton variant="negative">Удалить</BaseButton>
            <BaseButton variant="accent" onPress={() => {
              navigate(`/accounts/roles/${props.data.id}/edit`)
            }} >Редактировать</BaseButton>
          </ButtonGroup>
        );
      },
    },
  ]);

  const { roleStore } = useStore((store) => ({
    roleStore: store.roleStore,
  }));

  const [selectedRows, setSelectedRows] = useState<IRole[]>([]);

  const onRowSelectedHandler = (e: RowSelectedEvent<IRole, any>) => {
    setSelectedRows(e.api.getSelectedRows());
  };

  const deleteRolesHandler = () => {
    roleStore.deleteRoles({ keys: selectedRows.map((role) => role.id) });
  };

  const clearRowSelectionHandler = () => {
    setSelectedRows([]);
  };

  useEffect(() => {
    roleStore.fetchPage();
  }, []);

  return (
    <PageWrapper>
      <PageHeader title="СПИСОК РОЛЕЙ" />
      <PageActions>
        <ButtonGroup>
          <NavigateButton title="Создать роль" to="/accounts/roles/create" />
          <DialogTrigger>
            <BaseButton
              variant="negative"
              style="fill"
              children="Удалить выбранные"
              isDisabled={selectedRows.length === 0}
            />
            {(close) => (
              <SubmitDeleteDialog
                close={close}
                count={selectedRows.length}
                onSubmit={deleteRolesHandler}
              />
            )}
          </DialogTrigger>
        </ButtonGroup>
      </PageActions>
      <Pagination paginator={roleStore.pagination} />
      <PageContent>
        <DataGrid
          isRowSelectable={(e) => {
            return e.data?.name !== "superuser";
          }}
          columnDefs={columnDefs}
          onRowSelected={onRowSelectedHandler}
          onRowDataUpdated={clearRowSelectionHandler}
          rowData={roleStore.roles}
        />
      </PageContent>
    </PageWrapper>
  );
});
