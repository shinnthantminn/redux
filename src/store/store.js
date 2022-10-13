import {configureStore} from "@reduxjs/toolkit"
import TodoSlicer from "./reducer/TodoSlicer"

const store = configureStore({
    reducer:{
        Todo:TodoSlicer,
    }
})

export default store