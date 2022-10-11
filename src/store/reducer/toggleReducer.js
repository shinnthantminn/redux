const initialState = false

const toggleReducer = (state=initialState,action) => {
    switch(action.type){
        case 'toggle': return state = !state;
        default:return state
    }
}

export default toggleReducer;