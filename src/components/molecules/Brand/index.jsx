import React, { useContext } from "react";
import "./style.css";
import { SideBarContext } from "../../../App";
import { Link, Outlet, NavLink } from "react-router-dom";
import { MdOutlineAppRegistration } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { Icon } from "../../atoms";
const Brand = (props) => {
    const sideState = useContext(SideBarContext);
    const toggleSideBar = function () {
        sideState.setSideState((prev) => {
            if (prev == "openSide") {
                return "";
            } else {
                return "openSide";
            }
        });
    };
    return (
        <div className={props.className} style={props.style}>
            <NavLink to="/" className="brandContent">
                <Icon className="brandIcon">
                    <MdOutlineAppRegistration />
                </Icon>
                <h2>
                    app
                    <span>go</span>
                </h2>
            </NavLink>
            <button className="sideBtn" onClick={toggleSideBar}>
                <Icon>
                    <FaBars />
                </Icon>
            </button>
        </div>
    );
};

export default Brand;
