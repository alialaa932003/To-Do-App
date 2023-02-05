import React from "react";
import { Outlet } from "react-router";
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
