import React, { useState } from "react";
import { Input, Icon } from "../../atoms";
import { BsImageFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import "./style.css";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

const TaskInput = (props) => {
    const [value, setValue] = useState(new Date());
    const [open, setOpen] = useState(false);
    return (
        <div className="taskParent">
            <Input
                forwardRef={props.forwardRef}
                className="taskInput"
                placeholder="Add Text or audio task"
                type="text"
            />

            <div className="taskControl">
                <button className="taskIcon">
                    <Icon>
                        <BsImageFill />
                    </Icon>
                </button>
                <button className="taskIcon">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <MobileDatePicker
                            label="For mobile"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => (
                                <Icon {...params}>
                                    <SlCalender />
                                </Icon>
                            )}
                        />
                    </LocalizationProvider>
                </button>
            </div>
        </div>
    );
};

export default TaskInput;
