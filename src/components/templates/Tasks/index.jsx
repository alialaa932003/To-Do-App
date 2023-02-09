import React from "react";
import { Operation } from "../../organisms";
import img1 from "../../../assets/imgs/user1.jpg";
import img2 from "../../../assets/imgs/user2.jpg";
import img3 from "../../../assets/imgs/user3.jpg";
import img4 from "../../../assets/imgs/user4.jpg";
import img5 from "../../../assets/imgs/user5.jpg";
import "./style.css";
const Tasks = (props) => {
    const users = [
        {
            name: "ali alaa",
            src: img2,
        },
        {
            name: "abdullah albrawy",
            src: img1,
        },
        {
            name: "ahmed tarboush",
            src: img3,
        },
        {
            name: "abdelrahman mostafa",
            src: img4,
        },
        {
            name: "ali alaa",
            src: img5,
        },
    ];
    return (
        <div className="allTasks animated fadeInDown">
            {users.map((ele, index) => {
                return <Operation key={index} name={ele.name} src={ele.src} />;
            })}
        </div>
    );
};

export default Tasks;
