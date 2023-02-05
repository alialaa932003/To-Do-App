import React from "react";
import { SideItem } from "../../molecules";
import { FaBeer } from "react-icons/fa";
import { Icon } from "../../atoms";
const SideBar = (props) => {
    const items = [
        {
            name: "tasks",
            to: "/tasks",
            icon: <FaBeer />,
        },
        {
            name: "Images",
            to: "/images",
            icon: <FaBeer />,
        },
        {
            name: "Statistics",
            to: "/statistics",
            icon: <FaBeer />,
        },
        {
            name: "Users",
            to: "/users",
            icon: <FaBeer />,
        },
    ];
    return (
        <div>
            {items.map((ele, index) => {
                return (
                    <SideItem to={ele.to} key={index}>
                        <Icon>{ele.icon}</Icon>
                        <span>{ele.name}</span>
                    </SideItem>
                );
            })}
        </div>
    );
};

export default SideBar;
