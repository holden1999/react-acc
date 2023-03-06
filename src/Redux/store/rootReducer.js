import {combineReducers} from "redux";
import counterReducer from "./reducers/counterReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    auth: null
})

export default rootReducer