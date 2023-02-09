import React from "react";
import "./style.css";
const Button = (props) => {
    return (
        <button
            style={props.style}
            className={`${props.className} mainBtn`}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default Button;
