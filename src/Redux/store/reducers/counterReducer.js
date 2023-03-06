export const INCREMENT = "increment"
export const DECREMENT = "decrement"

const initialState = {
    value: 0,
    newState: null
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                value: state.value + 1,
            }
        case DECREMENT:
            return {
                ...state,
                value: state.value - 1,
            }
        default:
            return state
    }
}

export default counterReducer