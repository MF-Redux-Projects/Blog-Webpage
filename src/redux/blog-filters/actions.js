import {SEARCHFILTER, CATEGORYFILTER, AUTHORFILTER, CLEARSEARCHFILTER, CLEARCATEGORYFILTER, CLEARAUTHORFILTER, CLEARALLFILTERS} from "./action-types";

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

export const clearSearchFilter = () => {
    return {
        type: CLEARSEARCHFILTER
    }
}

export const clearCategoryFilter = () => {
    return {
        type: CLEARCATEGORYFILTER
    }
}

export const clearAuthorFilter = () => {
    return {
        type: CLEARAUTHORFILTER
    }
}

export const clearAllFilters = () => {
    return {
        type: CLEARALLFILTERS
    }
}