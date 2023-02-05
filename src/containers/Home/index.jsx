import React, { useState } from "react";
import { Home } from "../../components/templates";
import enTrans from "../../translations/en.json";
import arTrans from "../../translations/ar.json";
// import "../../translations/ar.json";
import { theme, typography } from "../../theme";
import translate from "../../utilities/translate";
const HomePage = () => {
    const [lang, setLang] = useState("ar");
    const [themType, setThemType] = useState("light");

    return (
        <div
            style={{
                background: theme[themType].primary,
                fontFamily: typography[lang].first,
            }}
        >
            <h1>
                <Home text={translate(lang, "name")} />
            </h1>
        </div>
    );
};

export default HomePage;
