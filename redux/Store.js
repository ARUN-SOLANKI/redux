import { createStore , applyMiddleware } from "redux";
import CombReducers from "./combineReducers";
import thunk from "redux-thunk";

const store = createStore(
    CombReducers ,
    {},
    applyMiddleware(thunk)
)
export default store;