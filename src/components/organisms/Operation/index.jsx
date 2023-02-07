import React from "react";
import { UserInfo, TaskInput } from "../../molecules";
import "./style.css";
import Grid from "@mui/material/Grid";
import "./style.css";
const Operation = (props) => {
    return (
        <Grid container className="operation">
            <Grid item xl={1.5} lg={3}>
                <UserInfo
                    className="taskUserInfo"
                    name={props.name}
                    src={props.src}
                />
            </Grid>
            <Grid item xl={6.5} lg={5}>
                <TaskInput />
            </Grid>
            <Grid item xl={4}></Grid>
        </Grid>
    );
};

export default Operation;
