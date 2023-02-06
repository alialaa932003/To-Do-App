import React, { useEffect, useRef, useState } from "react";
import { Icon } from "../../atoms";
import { FaBeer } from "react-icons/fa";
import { Link, Outlet, NavLink } from "react-router-dom";
import "./style.css";

const SideItem = (props, ref) => {
    return (
        <NavLink
            onClick={props.onClick}
            className={`${props.className}`}
            to={props.to}
            data-active={props["data-active"]}
        >
            {props.children}
        </NavLink>
    );
};

export default SideItem;
