import React from "react";
import { DataGrid } from "@mui/x-data-grid";

import "./style.css";
import { display } from "@mui/system";
import { UserInfo, ImageContent } from "../../molecules";
import img1 from "../../../assets/imgs/user1.jpg";
import img2 from "../../../assets/imgs/user2.jpg";
import img3 from "../../../assets/imgs/user3.jpg";
import img4 from "../../../assets/imgs/user4.jpg";
import img5 from "../../../assets/imgs/user5.jpg";
const MyTable = () => {
    const columns = [
        {
            field: "id",
            headerName: "ID",
            minWidth: 70,
            headerClassName: "tableHead",
            headerAlign: "center",
            align: "center",
            flex: 0.12,
            cellClassName: "tableCell",
        },
        {
            field: "user",
            headerName: "user",
            minWidth: 170,
            flex: 0.4,
            headerClassName: "tableHead",
            headerAlign: "center",
            align: "center",
            cellClassName: "tableCell",
            renderCell: (params) => (
                <ImageContent
                    className="tableUserInfo"
                    name={params.row.user}
                    type={params.row.type}
                    src={params.row.src}
                />
            ),
        },
        {
            field: "tasks",
            headerName: "user tasks",
            flex: 0.3,
            minWidth: 200,
            headerClassName: "tableHead",
            headerAlign: "center",
            align: "center",
            cellClassName: "tableCell",
            renderCell: (params) => (
                <span
                    className={`taskState ${
                        params.row.state == 1 ? "complete" : ""
                    }`}
                >
                    {params.row.tasks}
                </span>
            ),
        },
        {
            field: "phone",
            flex: 0.3,
            minWidth: 150,
            headerName: "phone number",
            type: "string",
            width: 70,

            headerClassName: "tableHead",
            headerAlign: "center",
            align: "center",
            cellClassName: "tableCell",
        },

        {
            field: "actions",
            headerName: "actions",
            minWidth: 150,
            flex: 0.2,
            headerClassName: "tableHead",
            headerAlign: "center",
            align: "center",
            cellClassName: "tableCell",
            renderCell: (params) => (
                <div className="actions" style={{ fontFamily: "montserrat" }}>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        delete
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        view
                    </button>
                </div>
            ),
        },
    ];

    const rows = [
        {
            id: 1,
            user: "Snow",
            type: "admin",
            phone: "+201234567891",
            tasks: "in progress",
            src: img1,
            state: 0,
        },
        {
            id: 2,
            user: "ali alaa",
            type: "admin",
            phone: "+201234567891",
            tasks: "finished",
            src: img2,
            state: 1,
        },
        {
            id: 9,
            user: "ali alaa",
            type: "admin",
            phone: "+201234567891",
            tasks: "finished",
            src: img3,
            state: 1,
        },
        {
            id: 10,
            user: "ali alaa",
            type: "admin",
            phone: "+201234567891",
            tasks: "finished",
            src: img5,
            state: 1,
        },
        {
            id: 3,
            user: "abdullah albrawy",
            type: "admin",
            phone: "+201234567891",
            tasks: "in progress",
            state: 0,
            src: img3,
        },
        {
            id: 4,
            user: "ahmed tarboush",
            type: "admin",
            phone: "+201234567891",
            tasks: "finished",
            state: 1,
            src: img4,
        },
        {
            id: 5,
            user: "abdelrahman mostafa",
            type: "admin",
            phone: "+201234567891",
            tasks: "finished",
            state: 1,
            src: img5,
        },
        {
            id: 7,
            user: "abdelrahman mostafa",
            type: "admin",
            phone: "+201234567891",
            tasks: "finished",
            state: 1,
            src: img4,
        },
    ];

    return (
        <div style={{ height: 800, width: "100%", marginTop: "4rem" }}>
            <DataGrid
                sx={{
                    fontFamily: "montserrat",
                    borderRadius: "1.5rem",
                    color: "#31394D",
                    overflow: "hidden",
                    background: "white",
                    fontSize: "1.4rem",
                    ".MuiDataGrid-columnHeaders": {
                        background: "rgba(250, 250, 250, 1)",
                    },
                    ".css-4rl02z-MuiDataGrid-root .MuiDataGrid-columnHeader": {
                        outlineOffset: "-5px",
                    },
                }}
                getRowHeight={(params) => console.log(params)}
                rowHeight={86}
                headerHeight={72}
                rows={rows}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[9]}
                checkboxSelection
                onSelectionModelChange={(itm) => console.log(itm)}
            />
        </div>
    );
};

export default MyTable;
