import React from "react";
import "./styles.css";
const Icon = (props) => {
    return (
        <span
            {...props}
            style={props.style}
            className={`icon ${props.className ? props.className : ""} `}
        >
            {props.children}
        </span>
    );
};

export default Icon;
