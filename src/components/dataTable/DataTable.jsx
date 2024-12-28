import React from "react";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../dataTableSource";
import './dataTable.scss'

const paginationModel = { page: 0, pageSize: 8 };

const DataTable = () => {
    const [data, setdata] = useState(userRows)

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (parms) => {
                return(
                    <div className="cellAction">
                        <div className="viewButton">View</div>
                        <div className="deleteButton">Delete</div>
                    </div>
                );
            }
        },
    ]

  return (
    <div className="dataTable">
        <div className="dataTableTitle">
            <span>Add New Users</span>
            <span className="link">Add New</span>
        </div>
        <DataGrid
          cellModesModel="datagrid"
          rows={data}
          columns={userColumns.concat(actionColumn)}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
    </div>
  );
};

export default DataTable;
