import {INCREMENT, DECREMENT} from "../reducers/counterReducer"

export const onIncrement = () => {
    return {
        type: INCREMENT,
        value: 1
    }
}

export const onDecrement = () => {
    return {
        type: DECREMENT,
        value: 1
    }
}