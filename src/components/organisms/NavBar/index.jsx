import React, { useRef } from "react";
import "./style.css";
import { Search, UserMenu } from "../../molecules";
const NavBar = () => {
    return (
        <div className="navBar">
            <Search />
            <UserMenu />
        </div>
    );
};

export default NavBar;
