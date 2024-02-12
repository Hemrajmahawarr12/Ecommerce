import { configureStore } from "@reduxjs/toolkit";
// import  FavSlice  from './FavSlice';
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import Favslice from "./FavSlice";
// import FavSlice from "./Favslice";


const persistConfig={
    key:"root",
    version:1,
    storage,
};
const reducer = combineReducers({
    fav: Favslice
})

const persistedReducer = persistReducer(persistConfig,reducer)


const store = configureStore({
    reducer: persistedReducer,
})

export default store;