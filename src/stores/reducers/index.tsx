import { combineReducers } from "redux";
import auth from "./auth";
import bind from "./bind";
const reducer = combineReducers({
    auth,
    bind
})

export default reducer;

