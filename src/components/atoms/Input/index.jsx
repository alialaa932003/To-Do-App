import React, { useEffect, useRef, useState } from "react";
import "./style.css";
const Input = (props, ref) => {
    return (
        <input
            className={`${props.className ? props.className : ""}`}
            ref={props.forwardRef}
            type="text"
        />
    );
};

export default Input;
