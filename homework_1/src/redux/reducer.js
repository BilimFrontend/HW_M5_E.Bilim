const initialState = {
    count: 0
}

export default function reducer(state = initialState, action){
    switch (action.type){
        case "INCREMENT": return {count: state.count +1}
        case "DECREMENT": return {count: state.count -1}
        case "RESET": return {count: state.count = 0}
        case "PLUS_TEN": return {count: state.count +10}
    }
    return state
}