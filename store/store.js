import {configureStore} from "@reduxjs/toolkit";
import AppStateReducer from "./slices/appSlice";

const store = configureStore({
    reducer:{
        AppStateReducer:AppStateReducer
    }
})

export default store;

