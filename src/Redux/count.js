import { createSlice } from "@reduxjs/toolkit";

const countSlice =createSlice({
    name:'count',
    initialState:0,
    reducers:{
        increment:(state)=>{
            return state + 1;
        },
        decrement:(state)=>{
            return state - 1;
        },
        reset: () => 0,
        incrementByAmount:(state,action)=>{
            console.log(typeof action.payload);
            return state += action.payload;
        },
        in:(state,action)=>{

        }
    }
})

export const {increment,decrement,reset,incrementByAmount} =countSlice.actions
export default countSlice.reducer