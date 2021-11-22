const initial_state = {
    number: 5
}

const numberReducer = (state = initial_state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                number: state.number + 1
            }
        case 'DECREMENT':
            return {
                number: state.number - 1
            }
        default:
            return state
    }
}

export default numberReducer