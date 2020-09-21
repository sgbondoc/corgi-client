export const initialState = null

export const reducer = (state, action) => {
    // provide
    if (action.type === "USER") {
        return action.payload
    }
    // remove 
    if (action.type === "CLEAR") {
        return null
    }
    return state
}