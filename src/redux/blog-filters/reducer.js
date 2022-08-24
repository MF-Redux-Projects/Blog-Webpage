import {SEARCHFILTER, AUTHORFILTER, CATEGORYFILTER} from "./action-types";
import {initialState} from "./initial-state";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCHFILTER:
            return {
                ...state,
                blogs: state.blogs.filter(blog => blog.title.includes(action.search))
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

export default reducer;