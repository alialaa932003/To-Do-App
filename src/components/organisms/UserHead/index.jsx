import React from "react";
import { Button, RadiusSpan } from "../../atoms";
import { Search } from "../../molecules";
import "./style.css";
const UserHead = () => {
    return (
        <div className="userHead">
            <div className="leftHead">
                <Search
                    className="userSearch"
                    placeholder="Search for any user"
                />
                <RadiusSpan className="usersRes" text="all results" />
            </div>
            <Button
                style={{ minWidth: "fit-content" }}
                className="secBtn delUsers"
            >
                delete all
            </Button>
        </div>
    );
};

export default UserHead;
