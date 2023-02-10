import React from "react";
import "./style.css";
const ImageContent = (props) => {
    return (
        <div
            className={`${
                props.className ? props.className : ""
            } imageContentBox`}
        >
            <div className="imageContentImg">
                <img src={props.src} alt="" />
            </div>
            <div className="imageContent">
                <h4>{props.name}</h4>
                <span>{props.type}</span>
            </div>
        </div>
    );
};

export default ImageContent;
