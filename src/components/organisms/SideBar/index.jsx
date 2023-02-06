import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
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

    return (
        <div className="sideBar">
            <Brand className="brand"></Brand>
            {items.map((ele, index) => {
                return (
                    <SideItem key={index} className={`sideItem`} to={ele.to}>
                        <Icon className='navIcon'>{ele.icon}</Icon>
                        <span>{ele.name}</span>
                    </SideItem>
                );
            })}
        </div>
    );
};

export default SideBar;
