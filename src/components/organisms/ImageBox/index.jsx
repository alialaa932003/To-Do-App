import React from "react";
import "./style.css";
import { ImageContent, ImageLikes } from "../../molecules";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Love, Icon } from "../../atoms";
const ImageBox = (props) => {
    return (
        <div className="imageBox ">
            <div className="image">
                <img width="100" height="100" src={props.background} alt="" />
                <span className="totalLoves">
                    {props.count}
                    {/* <Icon>
                        <FaRegHeart />
                    </Icon> */}
                </span>
            </div>

            <div className="imageFooter imagePageImg">
                <Link to="/">
                    <ImageContent
                        className="imagePageContent"
                        name={props.name}
                        type={props.type}
                        src={props.img}
                    />
                </Link>
                <button>
                    <Love />
                </button>
            </div>
        </div>
    );
};

export default ImageBox;
