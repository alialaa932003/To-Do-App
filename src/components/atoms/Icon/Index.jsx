import React from "react";
import "./styles.css";
const Icon = (props) => {
    return (
        <span
            style={props.style}
            className={`${props.className ? props.className : ""} icon`}
        >
            {props.children}
        </span>
    );
};

export default Icon;
