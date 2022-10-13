import {createSlice} from "@reduxjs/toolkit"

const initialState = [{
    id:1,
    name:"hla hla",
    phone:12032101,
},{
    id:2,
    name:"Myo Myo",
    phone:123121212,
}];

const TodoSlicer = createSlice({
    name:"todo",
    initialState:initialState,
    reducers:{
        Add:(state,action)=> {
            return [...state,action.payload]
        },
        Remove:(state,action)=> {
            return state.filter(i => i.id !== action.payload.id)
        },
    }
})

export const {Add,Remove} = TodoSlicer.actions

export default TodoSlicer.reducer;