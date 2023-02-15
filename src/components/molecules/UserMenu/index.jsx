import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import userImg from "../../../assets/imgs/user2.jpg";
import "./style.css";
import { FaChevronDown } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Icon } from "../../atoms";
import { IconText, ImageContent } from "../../molecules";
import img from "../../../assets/imgs/user3.jpg";
export default function UserMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
            >
                <ImageContent
                    className="navImageContent"
                    src={img}
                    name="ali alaa eldin"
                    type="admin"
                />
                <MenuItem
                    className="menuItemParent"
                    onClick={handleClose}
                    style={{ marginBottom: "1.2rem" }}
                >
                    <IconText className="navListItem">
                        <Icon className="iconTextIcon profile">
                            <CgProfile />
                        </Icon>
                        <span>profile</span>
                    </IconText>
                </MenuItem>
                <MenuItem className="menuItemParent" onClick={handleClose}>
                    <IconText className="navListItem">
                        <Icon className="iconTextIcon logout">
                            <MdLogout />
                        </Icon>
                        <span>Logout</span>
                    </IconText>
                </MenuItem>
            </Menu>
        </>
    );
}
