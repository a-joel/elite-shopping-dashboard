const initialState = {
        counter: 1,
        name: "joel"
}

export const changeReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGENAME':
                return {
                        ...state,
                        name: action.payload
                }

        case 'INCREMENT':
                return {
                        ...state,
                        counter: state.counter + 1
                }

        default:
                return state
    }    
}