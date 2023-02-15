import React from "react";

import "./style.css";
const UserInfo = (props) => {
    return (
        <div className={`${props.className} userInfo`}>
            <span className="infoImg">
                <img width="100" height="100" src={props.src} alt="" />
            </span>
            <h3>{props.name}</h3>
        </div>
    );
};

export default UserInfo;
