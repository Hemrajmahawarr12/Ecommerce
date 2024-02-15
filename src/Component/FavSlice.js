import { Input } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

// console.log("hemraj")

const FavSlice = createSlice({
    name: "fav",
    initialState: {
        login: '',
        Ragister :'',
    },
    reducers: {
        login(state, action) {
            // console.log(action.payload);
            state.login = action.payload;
           
        },Ragister(state, action) {
            // console.log(state,action)
        }
    }
});


export default FavSlice.reducer;
export const {login,Ragister} = FavSlice.actions;