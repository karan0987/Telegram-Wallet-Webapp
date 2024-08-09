import { combineReducers } from "redux";
import setTgUserData from "./setTgUserData";
import setWebApp from "./setWebApp";
import darkModeReducer from "./darkMode";

let rootReducer = combineReducers({
    TgData:setTgUserData,
    Webapp:setWebApp,
    DarkMode: darkModeReducer,
})
export default rootReducer