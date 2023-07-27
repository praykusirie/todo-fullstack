import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../slices/taskSlice";
import taskApiReducer from "../slices/taskApiSlice";


export const store = configureStore({
    reducer: {
        task: taskApiReducer
    }
})