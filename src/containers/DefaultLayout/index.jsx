import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import SideBar from "../../components/organisms/SideBar";
import "./style.css";
const DefaultLayout = () => {
    return (
        <div className="defaultLayout">
            <SideBar />
            <Outlet />
        </div>
    );
};

export default DefaultLayout;
