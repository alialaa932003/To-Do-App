import React from "react";
import { Input, Icon } from "../../atoms";
import { RiUserSearchLine } from "react-icons/ri";

import "./style.css";
const Search = (props) => {
    return (
        <div className={`${props.className} mainSearch`}>
            <Input
                type="search"
                className="searchInput"
                forwardRef={props.forwerdRef}
                placeholder={props.placeholder}
            />
            <Icon className="searchIcon">
                <RiUserSearchLine />
            </Icon>
        </div>
    );
};

export default Search;
