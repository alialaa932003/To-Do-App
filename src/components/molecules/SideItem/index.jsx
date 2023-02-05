import React from "react";
import { Icon } from "../../atoms";
import { FaBeer } from "react-icons/fa";
import { Link, Outlet, NavLink } from "react-router-dom";
const SideItem = (props) => {
    return <Link to={props.to}>{props.children}</Link>;
};

export default SideItem;
