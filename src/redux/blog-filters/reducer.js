import {SEARCHFILTER, AUTHORFILTER, CATEGORYFILTER} from "./action-types";
import {initialState} from "./initial-state";

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCHFILTER:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    search: action.search
                }
            }
        case AUTHORFILTER:
            return {
                ...state,
                blogs: state.blogs.filter(blog => blog.author.name === action.author)
            }
        case CATEGORYFILTER:
            return {
                ...state,
                blogs: state.blogs.filter(blog => blog.category === action.category)
            }
        default:
            return state;
    }
}

export default filterReducer;