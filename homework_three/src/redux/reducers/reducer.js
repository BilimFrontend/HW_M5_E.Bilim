import {combineReducers} from "redux";
import usersReducer from "./usersReducer";


//Это reducer только больше и он будет принимать дргуие маленьние reducer
//Он собирает маленькие reducer в большой
export const rootReducer = combineReducers({
    usersReducer
})