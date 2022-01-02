import { combineReducers } from "redux";
import Reducers from "./reducers";
const CombReducers = combineReducers({
    Number : Reducers
})
export default CombReducers;