import {STATUSCHANGED, COLORCHANGED} from "./action-types";

export const statusChanged = (status) => {
    return {
        type: STATUSCHANGED,
        status
    }
}

export const colorChanged = (color, changeType) => {
    return {
        type: COLORCHANGED,
        payload: {
            color,
            changeType
        }
    }
}