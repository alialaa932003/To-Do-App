import React, { useRef, useState } from "react";
import { UserInfo, TaskInput } from "../../molecules";
import "./style.css";
import Grid from "@mui/material/Grid";
import "./style.css";
import { Button } from "../../atoms";

const Operation = (props) => {
    const [value, setValue] = React.useState();

    return (
        <Grid container className="operation">
            <Grid item xl={1.5} lg={2.5} md={12} xs={12}>
                <UserInfo
                    className="taskUserInfo"
                    name={props.name}
                    src={props.src}
                />
            </Grid>
            <Grid item xl={7} lg={9.5} md={6} xs={12}>
                <TaskInput />
            </Grid>
            <Grid item xl={3.5} lg={12} md={6} xs={12}>
                <div className="taskBtns">
                    <Button className="primaryBtn">add task</Button>
                    <Button style={{ marginLeft: "1rem" }} className="secBtn">
                        view profile
                    </Button>
                </div>
            </Grid>
        </Grid>
    );
};

export default Operation;
