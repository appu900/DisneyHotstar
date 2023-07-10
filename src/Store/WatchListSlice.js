import { createSlice } from "@reduxjs/toolkit";
const initialState = []
const WatchListSlice = createSlice({
    name:'WatchList',
    initialState,
    reducers:{
        add(state,action){
            state.push(action.payload)
        }
    }
})

export const{add} = WatchListSlice.actions;
export default WatchListSlice.reducer