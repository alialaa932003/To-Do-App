import React from "react";
import "./style.css";
import { MdOutlineAppRegistration } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { Icon } from "../../atoms";

const Brand = (props) => {
    return (
        <div className={props.className} style={props.style}>
            <div className="brandContent">
                <Icon className="brandIcon">
                    <MdOutlineAppRegistration />
                </Icon>
                <h2>
                    app
                    <span>go</span>
                </h2>
            </div>
            <button className="sideBtn">
                <Icon>
                    <FaBars />
                </Icon>
            </button>
        </div>
    );
};

export default Brand;
