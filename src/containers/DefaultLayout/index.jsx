import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import SideBar from "../../components/organisms/SideBar";
import { SideBarContext } from "../../App";
import "./style.css";
const DefaultLayout = () => {
    const sideState = useContext(SideBarContext);
    return (
        <div className={`defaultLayout ${sideState.sideState}`}>
            <SideBar />
            <div className="bodyContainer ">
                <Outlet />
            </div>
        </div>
    );
};

export default DefaultLayout;
