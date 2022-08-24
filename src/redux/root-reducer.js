import blogReducer from "./blogs/reducer";
import filterReducer from "./filters/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    blogs: blogReducer,
    filters: filterReducer
});

export default rootReducer;