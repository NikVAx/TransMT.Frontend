import { AgGridReact, AgGridReactProps } from "ag-grid-react";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";

type DataGridProps<TData> = AgGridReactProps<TData> & {
  flexBasis?: string
};

export function DataGrid<TData>({
  rowData,
  columnDefs,
  suppressRowClickSelection = true,
  rowSelection = "multiple",
  flexBasis,
  ...props
}: DataGridProps<TData>) {
  return (
    <div className="ag-theme-alpine" style={{ height: "100%", width: "100%", flexBasis: flexBasis }}>
      <AgGridReact
        {...props}
        rowData={rowData}
        columnDefs={columnDefs}
        suppressRowClickSelection={suppressRowClickSelection}
        rowSelection={rowSelection}
      />
    </div>
  );
}
