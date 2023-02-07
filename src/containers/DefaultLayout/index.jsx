import React, { useContext, useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { SideBar, NavBar } from "../../components/organisms";
import { SideBarContext } from "../../App";

import "./style.css";
const DefaultLayout = () => {
    const [width, setWindowWidth] = useState(0);
    useEffect(() => {
        updateDimensions();

        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);
    const updateDimensions = () => {
        const width = window.innerWidth;
        setWindowWidth(width);
    };
    const sideState = useContext(SideBarContext);
    return (
        <div
            className={`defaultLayout ${
                width >= 992 ? sideState.sideState : ""
            }`}
        >
            <SideBar />
            <div className="bodyContainer ">
                <NavBar />
                <Outlet />
            </div>
        </div>
    );
};

export default DefaultLayout;
