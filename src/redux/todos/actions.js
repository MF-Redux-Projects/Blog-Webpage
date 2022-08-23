import {ADDED, ALLCOMPLETED, CLEARCOMPLETED, DELETED, COLORSELECTED, TOGGLED} from "./action-types";

export const added = (todoText) => {
    return {
        type: ADDED,
        todoText
    }
}

export const toggled = (id) => {
    return {
        type: TOGGLED,
        id
    }
}

export const colorSelected = (id, color) => {
    return {
        type: COLORSELECTED,
        payload:{
            id,
            color
        }
    }
}

export const deleted = (id) => {
    return {
        type: DELETED,
        id
    }
}

export const allCompleted = () => {
    return {
        type: ALLCOMPLETED
    }
}

export const clearCompleted = () => {
    return {
        type: CLEARCOMPLETED
    }
}

