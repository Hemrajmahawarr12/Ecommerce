import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import FavSlice from "./FavSlice";

const persistConfig={
    key:"root",
    version:1,
    storage,
   
};
const reducer = combineReducers({
    fav: FavSlice
})

const persistedReducer = persistReducer(persistConfig,reducer)

const store = configureStore({
    reducer: persistedReducer,
})

export default store;