import React from "react";
import "./style.css";
const IconText = (props) => {
    return (
        <div className={`${props.className} IconText`}>{props.children}</div>
    );
};

export default IconText;
