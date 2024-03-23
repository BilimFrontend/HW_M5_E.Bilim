import {type} from "../type"

const initialState = {
    users: [],
}

export default function usersReducer(state = initialState, action){
    switch (action.type) {
        case type.USERS: return {...state, users: action.payload}
        default:
            return state
    }
}