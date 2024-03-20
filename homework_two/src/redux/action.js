import {type as types} from "./types";


export function incrementCount(number) {
    return{
        type: types.INCREMENT,
        payload: number
    }
}


export function decrementCount(number) {
    return{
        type: types.DECREMENT,
        payload: number
    }
}

export function divisionCount(number) {
    return{
        type: types.DIVISION,
        payload: number
    }
}

export function multiplicationCount(number) {
    return{
        type: types.MULTIPLICATION,
        payload: number
    }
}