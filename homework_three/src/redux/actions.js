import {type as types} from "./type";

function getUsersAction(users) {
    return {
        type: types.USERS,
        payload: users
    }
}

function getUsersInfoAction(users) {
    return {
        type: types.USERS_INFO,
        payload: users
    }
}



export function fetchUserAction () {
    return async function(dispatch) {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        dispatch(getUsersAction(data))
    }
}

export function getUserInfoAction (id) {
    return async function(dispatch) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await response.json()
        dispatch(getUsersInfoAction(data))
    }
}