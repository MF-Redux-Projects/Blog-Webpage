import {SEARCHFILTER, CATEGORYFILTER, AUTHORFILTER} from "./action-types";

export const searchFilter = (search) => {
    return {
        type: SEARCHFILTER,
        search
    }
}

export const categoryFilter = (category) => {
    return {
        type: CATEGORYFILTER,
        category
    }
}

export const authorFilter = (author) => {
    return {
        type: AUTHORFILTER,
        author
    }
}