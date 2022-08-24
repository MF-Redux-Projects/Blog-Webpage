import filterReducer from "./blog-filters/reducer";
import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(filterReducer, composeWithDevTools());

export default store;