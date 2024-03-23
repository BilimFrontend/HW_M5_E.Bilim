import {type as types} from "../types";

const initialState = {
    count: 0,
}


export default function countReducer(state = initialState, action) {
    switch (action.type){
        case types.INCREMENT : return {count: action.payload}
        case types.DECREMENT : return {count: action.payload}
        case types.DIVISION : return {count: action.payload}
        case types.MULTIPLICATION : return {count: action.payload}
    }
    return state
}