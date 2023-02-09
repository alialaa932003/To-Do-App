import React, { useRef } from "react";
import "./style.css";
import { Search, UserMenu, DarkBtn } from "../../molecules";
const NavBar = () => {
    return (
        <div className="navBar">
            <Search
                className="search mainSearch"
                placeholder="Search for anything"
            />
            <div className="rightNav">
                <DarkBtn />
                <UserMenu />
            </div>
        </div>
    );
};

export default NavBar;
