import enTrans from "../translations/en.json";
import arTrans from "../translations/ar.json";
export default function fun(lang, key) {
    if (lang == "en") {
        console.log("lol");
        return enTrans[key];
    } else {
        return arTrans[key];
    }
}
