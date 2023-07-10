import { configureStore } from "@reduxjs/toolkit";
import WatchListReducer from './WatchListSlice'
import redirectReducer from "./redirectSlice";
import redirectSlice from "./redirectSlice";

export const store = configureStore({
    reducer:{
       WatchList:WatchListReducer,
       redirect:redirectSlice,
    }
})