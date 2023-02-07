import React, { useRef } from "react";
import "./style.css";
import { Search, UserMenu } from "../../molecules";
const NavBar = () => {
    return (
        <div className="navBar">
            <Search placeholder="Search for anything" />
            <UserMenu />
        </div>
    );
};

export default NavBar;
