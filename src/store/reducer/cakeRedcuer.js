const cakeReducer = (state=0,action) => {
    switch (action.type){
        case 'add': return state + action.amount;
        case 'remove': 
        return state - action.amount;
        default : return state;
    }
}

export default cakeReducer;


// action => type => payload