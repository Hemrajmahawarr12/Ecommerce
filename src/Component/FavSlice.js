import { Input } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

// console.log("hemraj")

const FavSlice = createSlice({
    name: "fav",
    initialState: {
        cart: [],
        ragister:[]
    },
    reducers: {
        logindata(state, action) {  
            console.log(action.payload);
            state.ragister=action.payload
            sessionStorage.setItem('HemrajMahawar', JSON.stringify(action.payload))
            
        },
        cart(state, action) {
            console.log(state.cart);    
            state.cart = action.payload;

        },
        increaseQty(state, action) {
            const { product, cartData } = action.payload;
            const updatedQty = { ...product, qty: product.qty += 1 };
            const newArray = cartData.map((item) => {
                if(item.id === updatedQty.id){
                    return updatedQty 
                }else{
                    return item 
                }
            });
        }
        
    }
});


export default FavSlice.reducer;
export const { cart, increaseQty,logindata} = FavSlice.actions;