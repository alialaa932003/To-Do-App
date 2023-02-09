import React, { useEffect, useContext, useState } from "react";
import { Icon } from "../../atoms";
import { BsFillCloudSunFill, BsMoonStarsFill } from "react-icons/bs";
import "./style.css";
import { SideBarContext } from "../../../App";

const DarkBtn = () => {
    const themeState = useContext(SideBarContext);
    const toggleTheme = function () {
        themeState.setThemeState((prev) => {
            if (prev == "light") {
                return "dark";
            } else {
                return "light";
            }
        });
    };
    return (
        <button className="darkBtn " onClick={toggleTheme}>
            {themeState.themeState == "light" && (
                <Icon className="darkAnimate darkAnime">
                    <BsFillCloudSunFill />
                </Icon>
            )}
            {themeState.themeState == "dark" && (
                <Icon className="darkAnimate darkAnime">
                    <BsMoonStarsFill />
                </Icon>
            )}
        </button>
    );
};

export default DarkBtn;
