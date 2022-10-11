export const Add = (dispatch,amount) => {
    return dispatch({
        type:'add',
        amount,
    })
}

export const Remove = (dispatch,amount) => {
    return dispatch({
        type:"remove",
        amount,
    })
}

// {} => action: {type:"add"}