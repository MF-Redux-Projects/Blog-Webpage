import {
    SEARCHFILTER,
    AUTHORFILTER,
    CATEGORYFILTER,
    CLEARSEARCHFILTER,
    CLEARCATEGORYFILTER,
    CLEARAUTHORFILTER,
    CLEARALLFILTERS,
    CLEARFILTERS
} from "./action-types";
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
        case CLEARSEARCHFILTER:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    search: ''
                }
            }
        case CLEARCATEGORYFILTER:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    category: ''
                }
            }
        case CLEARAUTHORFILTER:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    author: ''
                }
            }
        case CLEARALLFILTERS:
            return {
                ...state,
                filters: {
                    search: '',
                    category: '',
                    author: ''
                }
            }
        default:
            return state;
    }
}

export default filterReducer;