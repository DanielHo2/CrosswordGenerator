import { reducerSlice } from "./authSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({

    reducer: {
        auth: reducerSlice.reducer
    },
    devTools: true
})