import {ADDED, ALLCOMPLETED, CLEARCOMPLETED, DELETED, COLORSELECTED, TOGGLED} from "./action-types";

const initialState = [
    {
        id: 1,
        text: 'Learn about React',
        completed: true
    },
    {
        id: 2,
        text: 'Learn about Redux',
        completed: false,
        color: 'red'
    }
]

const nextId = (state) => {
    const maxId = state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1;
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDED:
            return [
                ...state,
                {
                    id: nextId(state),
                    text: action.todoText,
                    completed: false
                }
            ]
        case TOGGLED:
            return state.map(todo => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo;
            })
        case COLORSELECTED:
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        color: action.payload.color
                    }
                }
                return todo;
            })
        case DELETED:
            return state.filter(todo => todo.id !== action.id);

        case ALLCOMPLETED:
            return state.map(todo => {
                return {
                    ...todo,
                    completed: true
                }
            })
        case CLEARCOMPLETED:
            return state.filter(todo => !todo.completed);
        default:
            return state;
    }
}

export default todoReducer;