import {COLORCHANGED, STATUSCHANGED} from "./action-types";

const initialState = {
    status: 'all',
    colors: []
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case STATUSCHANGED:
            return {
                ...state,
                status: action.status
            }
        case COLORCHANGED:
            const {color, changeType} = action.payload;
            switch (changeType) {
                case 'added':
                    return {
                        ...state,
                        colors: [
                            ...state.colors,
                            color
                        ]
                    }
                case 'removed':
                    return {
                        ...state,
                        colors: state.colors.filter(c => c !== color)
                    }
                default:
                    return state;
            }

        default:
            return state;
    }
}

export default filterReducer;