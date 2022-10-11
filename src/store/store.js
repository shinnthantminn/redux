import {combineReducers,createStore,applyMiddleware} from "redux"
import cakeReducer from "./reducer/cakeRedcuer"
import thunk from "redux-thunk"
import toggleReducer from "./reducer/toggleReducer"

const reducer = combineReducers({
    cake:cakeReducer, 
    toggle:toggleReducer 
})

export const store = createStore(reducer,{},applyMiddleware(thunk))


// ၁၀ store


// context => value 

