import React from "react";
import { Search } from "../../molecules";
const Menu = (props) => {
    return (
        <>
            <Search text={props.text} />
            <Search text={props.text} />
        </>
    );
};

export default Menu;
