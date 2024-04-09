import { AgGridReact } from "ag-grid-react";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";

export const DataGrid = ({
  rowData,
  columnDefs,
  suppressRowClickSelection = true,
  rowSelection = "multiple",
  ...props
}: any) => {
  return (
    <div className="ag-theme-alpine" style={{ height: "100%", width: "100%" }}>
      <AgGridReact
        {...props}
        rowData={rowData}
        columnDefs={columnDefs}
        suppressRowClickSelection={suppressRowClickSelection}
        rowSelection={rowSelection}
      />
    </div>
  );
};
