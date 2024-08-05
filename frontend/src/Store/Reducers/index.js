import { combineReducers } from "redux";
import setTgUserData from "./setTgUserData";
import setWebApp from "./setWebApp";
import darkMode from "./darkMode";

let rootReducer = combineReducers({
    TgData:setTgUserData,
    Webapp:setWebApp,
    DarkMode: darkMode
})
export default rootReducer