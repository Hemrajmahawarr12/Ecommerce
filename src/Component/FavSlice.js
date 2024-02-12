import { Input } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";



const FavSlice = createSlice({
    name: "fav",
    initialState: {
        bollyfav: [],
    },
    reducers: {
        bollyfav(state, action) {
            state.bollyfav = action.payload;
           
        },earAllUser(state, action) {
            // console.log(state,action)
            return [];
        }
    }
});


export default FavSlice.reducer;
export const {bollyfav} = FavSlice.actions;