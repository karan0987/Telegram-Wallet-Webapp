import { combineReducers } from "redux";
import setTgUserData from "./setTgUserData";
import setWebApp from "./setWebApp";

let rootReducer = combineReducers({
    TgData:setTgUserData,
    Webapp:setWebApp
})
export default rootReducer