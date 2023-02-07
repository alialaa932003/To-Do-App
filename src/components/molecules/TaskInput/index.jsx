import { Input } from "../../atoms";
import React from "react";
import "./style.css";
const TaskInput = () => {
    return (
        <div>
            <Input
                className="taskInput"
                placeholder="Add Text or audio task"
                type="text"
            />
        </div>
    );
};

export default TaskInput;
