import React, { useContext, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { SideBarContext } from "../../../App";

import "./style.css";
import { ImageContent } from "../../molecules";
import img1 from "../../../assets/imgs/user1.webp";
import img2 from "../../../assets/imgs/user2.webp";
import img3 from "../../../assets/imgs/user3.webp";
import img4 from "../../../assets/imgs/user4.webp";
import img5 from "../../../assets/imgs/user5.webp";
const MyTable = () => {
    const columns = [
        {
            field: "id",
            headerName: "ID",
            minWidth: 70,
            headerClassName: "tableHead",

            flex: 0.12,
            cellClassName: "tableCell",
        },
        {
            field: "user",
            headerName: "user",
            minWidth: 170,
            flex: 0.4,
            headerClassName: "tableHead",

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
            flex: 0.25,
            minWidth: 150,
            headerClassName: "tableHead",

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

            headerClassName: "tableHead",

            cellClassName: "tableCell",
        },
        {
            field: "email",
            flex: 0.3,
            minWidth: 150,
            headerName: "email address",
            type: "string",
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
                        className="viewBtn"
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        view
                    </button>
                    <button
                        className="delBtn"
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        delete
                    </button>
                </div>
            ),
        },
    ];

    const rows = [
        {
            id: 1,
            user: "Snow white black",
            type: "Copenhagen, Denmark",
            phone: "+201234567891",
            tasks: "in progress",
            email: "example@example.com",
            src: img1,
            state: 0,
        },
        {
            id: 2,
            user: "ali alaa eldin",
            type: "Copenhagen, Denmark",
            phone: "+201234567891",
            tasks: "finished",
            email: "example@example.com",
            src: img2,
            state: 1,
        },
        {
            id: 9,
            user: "ali alaa eldin",
            type: "Copenhagen, Denmark",
            phone: "+201234567891",
            tasks: "finished",
            email: "example@example.com",
            src: img3,
            state: 1,
        },
        {
            id: 10,
            user: "ali alaa eldin",
            type: "Copenhagen, Denmark",
            phone: "+201234567891",
            tasks: "finished",
            email: "example@example.com",
            src: img5,
            state: 1,
        },
        {
            id: 3,
            user: "abdullah albrawy",
            type: "Copenhagen, Denmark",
            phone: "+201234567891",
            tasks: "in progress",
            email: "example@example.com",
            state: 0,
            src: img3,
        },
        {
            id: 4,
            user: "ahmed tarboush",
            type: "Copenhagen, Denmark",
            phone: "+201234567891",
            tasks: "finished",
            email: "example@example.com",
            state: 1,
            src: img4,
        },
        {
            id: 5,
            user: "abdelrahman mostafa",
            type: "Copenhagen, Denmark",
            phone: "+201234567891",
            tasks: "finished",
            email: "example@example.com",
            state: 1,
            src: img5,
        },
        {
            id: 7,
            user: "abdelrahman mostafa",
            type: "Copenhagen, Denmark",
            phone: "+201234567891",
            tasks: "finished",
            email: "example@example.com",
            state: 1,
            src: img4,
        },
    ];
    const theme = useContext(SideBarContext);

    return (
        <div style={{ height: 800, width: "100%", marginTop: "4rem" }}>
            <DataGrid
                sx={{
                    fontFamily: "montserrat",
                    borderRadius: "1.5rem",
                    color: `${theme.themeState == "dark" ? "#fff" : "#31394D"}`,
                    overflow: "hidden",
                    background: `${
                        theme.themeState == "dark" ? "#30373c" : "#fff"
                    }`,
                    fontSize: "1.4rem",
                    transition: ".3s all ease",
                    ".css-whi0l6": {
                        color: `${
                            theme.themeState == "dark" ? "#fff" : "#30373c"
                        }`,
                    },
                    ".css-zun73v": {
                        color: `${
                            theme.themeState == "dark" ? "#fff" : "#30373c"
                        }`,
                    },
                    ".MuiDataGrid-columnHeaders": {
                        background: `${
                            theme.themeState == "dark"
                                ? "#272d30"
                                : "rgb(252,252,252)"
                        }`,
                        transition: ".3s all ease",
                    },
                    ".css-4rl02z-MuiDataGrid-root .MuiDataGrid-columnHeader": {
                        outlineOffset: "-5px",
                    },
                    "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
                        outline: "none !important",
                    },
                    ".css-vubbuv": {
                        fontSize: "2.2rem",
                        color: "inherit",
                    },
                    ".tableCell": {
                        fontSize: "1.4rem ",
                        fontWeight: 500,
                    },
                    ".css-levciy-MuiTablePagination-displayedRows": {
                        fontSize: "1.4rem",
                    },
                    ".css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root": {
                        color: `${
                            theme.themeState == "dark"
                                ? "#fff"
                                : "rgba(0, 0, 0, 0.6)"
                        }`,
                    },
                    ".css-rtrcn9-MuiTablePagination-root": {
                        color: "inherit",
                    },
                    ".css-1chpzqh": {
                        fontSize: "1.4rem",
                        color: "inherit",
                    },

                    ".css-zylse7-MuiButtonBase-root-MuiIconButton-root.Mui-disabled":
                        {
                            color: "inherit",
                        },
                }}
                rowHeight={86}
                headerHeight={72}
                rows={rows}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    );
};

export default MyTable;
