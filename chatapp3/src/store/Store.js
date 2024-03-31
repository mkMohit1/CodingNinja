import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "../reducers/ContextReducer";

export const store = configureStore({
    reducer:{
        contactReducer
    }
})