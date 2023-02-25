import React, { useContext, useState } from "react";
import "./style.css";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import userImg from "../../../assets/imgs/user2.webp";
import { FaChevronDown } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Icon } from "../../atoms";
import { IconText, ImageContent } from "../../molecules";
import { SideBarContext } from "../../../App";

import img from "../../../assets/imgs/user3.webp";
export default function UserMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const theme = useContext(SideBarContext);

    return (
        <>
            <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                className="userMenu"
            >
                <span className="userImg">
                    <img className="" src={userImg} alt="" />
                </span>
                <div className="userContent">
                    <h3>ali alaa eldin</h3>

                    <span>admin</span>
                </div>
                <Icon className="userIcon">
                    <FaChevronDown />
                </Icon>
            </Button>
            <Menu
                style={{ fontFamily: "inherit" }}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
                className="menuParent"
                PaperProps={{
                    elevation: 0,
                    sx: {
                        background: `${
                            theme.themeState == "dark" ? "#30373c" : "#fff"
                        }`,
                        borderRadius: "1rem",
                        padding: "1rem 1.5rem",
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 10px rgba(0,0,0,0.15))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                    },
                }}
            >
                <div className="listMenu">
                    <ImageContent
                        className={`navImageContent ${
                            theme.themeState == "dark"
                                ? "darkContent"
                                : "lightContent"
                        }`}
                        src={img}
                        name="ali alaa eldin"
                        type="admin"
                    />
                    <MenuItem
                        className={`menuItemParent ${
                            theme.themeState == "dark" ? "darkItem" : ""
                        }`}
                        onClick={handleClose}
                        style={{ marginBottom: "1.2rem" }}
                    >
                        <IconText className="navListItem">
                            <Icon className="iconTextIcon profile">
                                <CgProfile />
                            </Icon>
                            <span
                                style={{
                                    color:
                                        theme.themeState == "dark"
                                            ? "#fff"
                                            : "#30373c",
                                }}
                            >
                                profile
                            </span>
                        </IconText>
                    </MenuItem>
                    <MenuItem
                        className={`menuItemParent ${
                            theme.themeState == "dark" ? "darkItem" : ""
                        }`}
                    >
                        <IconText className="navListItem">
                            <Icon className="iconTextIcon logout">
                                <MdLogout />
                            </Icon>
                            <span
                                style={{
                                    color:
                                        theme.themeState == "dark"
                                            ? "#fff"
                                            : "#30373c",
                                }}
                            >
                                Logout
                            </span>
                        </IconText>
                    </MenuItem>
                </div>
            </Menu>
        </>
    );
}
