import {SEARCHFILTER, AUTHORFILTER, CATEGORYFILTER, CLEARFILTERS} from "./action-types";
import {initialState} from "./initial-state";

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCHFILTER:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    search: action.search
                }
            }
        case AUTHORFILTER:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    author: action.author
                }
            }
        case CATEGORYFILTER:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    category: action.category
                }
            }
        default:
            return state;
    }
}

export default filterReducer;