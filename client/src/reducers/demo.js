const reducer = (state = [], action) => {
    switch(action.type) {
        case 'CREATE_DEMO_SUCCESS':
            return [...state, action.payload]
        
        case 'FETCH_DEMO_SUCCESS':
            return action.payload

        default:
            return state
    }
}

export default reducer;