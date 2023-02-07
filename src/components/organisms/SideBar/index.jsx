import React, { useEffect, useContext, useState } from "react";
import "./styles.css";
import { SideBarContext } from "../../../App";
import { SideItem, Brand } from "../../molecules";
import { FaTasks, FaUserSecret } from "react-icons/fa";
import { IoImages } from "react-icons/io5";
import { TfiStatsUp } from "react-icons/tfi";
import { Icon } from "../../atoms";
import translateFun from "../../../utilities/translate";
const SideBar = (props) => {
    const items = [
        {
            name: translateFun("en", "tasks"),
            to: "/tasks",
            icon: <FaTasks />,
        },
        {
            name: translateFun("en", "images"),
            to: "/images",
            icon: <IoImages />,
        },
        {
            name: translateFun("en", "statistics"),
            to: "/statistics",
            icon: <TfiStatsUp />,
        },
        {
            name: translateFun("en", "users"),
            to: "/users",
            icon: <FaUserSecret />,
        },
    ];
    const [width, setWindowWidth] = useState(0);
    console.log(width);
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
        <div className={`sideBar ${width >= 992 ? sideState.sideState : ""}`}>
            <Brand className="brand"></Brand>
            {items.map((ele, index) => {
                return (
                    <SideItem key={index} className={`sideItem`} to={ele.to}>
                        <Icon className="navIcon">{ele.icon}</Icon>
                        <span className="navHead">{ele.name}</span>
                    </SideItem>
                );
            })}
        </div>
    );
};

export default SideBar;
