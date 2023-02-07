import React from "react";
import { Input, Icon } from "../../atoms";
import { RiUserSearchLine } from "react-icons/ri";

import "./style.css";
const Search = (props) => {
    return (
        <div className="search">
            <Input className="searchInput" forwardRef={props.forwerdRef} />
            <Icon className="searchIcon">
                <RiUserSearchLine />
            </Icon>
        </div>
    );
};

export default Search;
