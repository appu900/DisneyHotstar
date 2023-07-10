
import { createSlice } from "@reduxjs/toolkit";
const initialState = []
const redirectSlice = createSlice({
    name:'redirect',
    initialState,
    reducers:{
        sendVideo(state,action){
            state.push(action.payload)
        }
    }
})

export const{sendVideo} = redirectSlice.actions;
export default redirectSlice.reducer

