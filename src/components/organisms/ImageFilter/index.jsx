import React from "react";
import { Input, Button } from "../../atoms";
import { Search } from "../../molecules";
import "./style.css";
const ImageFilter = () => {
    return (
        <div className="imageHead">
            <Search
                className="imageSearch mainSearch"
                placeholder="Search for For any image"
            />
            <div className="imagePageControl">
                <Button className="primaryBtn">Upload image</Button>
                <Button className="secBtn">Order By likes</Button>
            </div>
        </div>
    );
};

export default ImageFilter;
