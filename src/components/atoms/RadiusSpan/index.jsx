import React from "react";
import "./style.css";
const RadiusSpan = (props) => {
    return (
        <span className={`${props.className} radiusSpan`}>{props.text}</span>
    );
};

export default RadiusSpan;
