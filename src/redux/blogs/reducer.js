import {initialState} from "./initial-state";
import {FETCHBLOGS} from "./action-types";

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHBLOGS:
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default blogReducer;