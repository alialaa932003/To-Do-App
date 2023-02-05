import React, { useState } from "react";
import { Home } from "../../components/templates";
import enTrans from "../../translations/en.json";
import arTrans from "../../translations/ar.json";
// import "../../translations/ar.json";
import translate from "../../utilities/translate";
const HomePage = () => {
    const [lang, setLang] = useState("en");

    return (
        <div>
            <Home text={translate(lang, "name")} />
        </div>
    );
};

export default HomePage;
