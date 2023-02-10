import React from "react";
import Icon from "../Icon";
import { FaRegHeart } from "react-icons/fa";

import "./style.css";
const Love = (props) => {
    return (
        <Icon className="heart">
            <FaRegHeart />
        </Icon>
    );
};

export default Love;
