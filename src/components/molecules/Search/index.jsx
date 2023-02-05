import React from "react";
import { Input } from "../../atoms";
const Search = (props) => {
    return (
        <div>
            <Input text={props.text} />
            <Input text={props.text} />
        </div>
    );
};

export default Search;
