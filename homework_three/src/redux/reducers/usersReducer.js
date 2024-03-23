import {type} from "../type"

const initialState = {
    users: [],
    user_info: []
}

export default function usersReducer(state = initialState, action){
    switch (action.type) {
        case type.USERS: return {...state, users: action.payload}
        case type.USERS_INFO: return {...state, user_info: action.payload}
        default:
            return state
    }
}