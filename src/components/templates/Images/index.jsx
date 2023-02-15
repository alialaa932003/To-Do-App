import React from "react";
import { ImageBox, ImageFilter } from "../../organisms";
import Grid from "@mui/material/Grid";
import img2 from "../../../assets/imgs/user2.jpg";
import img1 from "../../../assets/imgs/user1.jpg";
import img3 from "../../../assets/imgs/user3.jpg";
import img4 from "../../../assets/imgs/user4.jpg";
import img5 from "../../../assets/imgs/user5.jpg";
import img6 from "../../../assets/imgs/user6.jpg";
import "./style.css";
const Images = () => {
    const menu = [
        {
            name: "ali alaa",
            type: "Copenhagen, Denmark",
            img: img2,
            background: img6,
        },
        {
            name: "ali alaa",
            type: "Copenhagen, Denmark",
            img: img5,
            background: img2,
        },
        {
            name: "ali alaa",
            type: "Copenhagen, Denmark",
            img: img6,
            background: img4,
        },
        {
            name: "ali alaa",
            type: "Copenhagen, Denmark",
            img: img1,
            background: img3,
        },
        {
            name: "ali alaa",
            type: "Copenhagen, Denmark",
            img: img4,
            background: img1,
        },
        {
            name: "ali alaa",
            type: "Copenhagen, Denmark",
            img: img3,
            background: img5,
        },
    ];
    return (
        <div className="animated fadeInDown">
            <ImageFilter />
            <Grid container className="imagesGrid">
                {menu.map((item, index) => {
                    return (
                        <Grid
                            item
                            xl={4}
                            lg={6}
                            md={8}
                            sm={9}
                            xs={12}
                            key={index}
                        >
                            <ImageBox
                                name={item.name}
                                type={item.type}
                                background={item.background}
                                img={item.img}
                                count="199.5k"
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
};

export default Images;
