import React from "react";

const Icon = (props) => {
    return (
        <span style={props.style} className={props.className}>
            {props.children}
        </span>
    );
};

export default Icon;
