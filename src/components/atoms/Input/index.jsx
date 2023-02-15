import React, { useEffect, useRef, useState } from "react";
import "./style.css";
const Input = (props, ref) => {
    return (
        <input
            className={`${props.className ? props.className : ""}`}
            type={props.type}
            placeholder={props.placeholder}
        />
    );
};

export default Input;
