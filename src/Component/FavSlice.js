import { Input } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const FavSlice = createSlice({
    name: "fav",
    initialState: {
        cart: [],
        ragister:[],
        favouritestate:[]
    },
    reducers: {
        logindata(state, action) {  
            state.ragister=action.payload
            sessionStorage.setItem('HemrajMahawar', JSON.stringify(action.payload))
            
        },
        cart(state, action) {
            state.cart = action.payload;

        },
        favourite(state,action){
            console.log(action.payload);
            state.favouritestate = action.payload;
        }
        
    }
});


export default FavSlice.reducer;
export const { cart, logindata,favourite} = FavSlice.actions;