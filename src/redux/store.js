import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from './slices/productSlice'
import themeSlice from "./slices/themeSlice";

const rootReducer = combineReducers({
    product: productSlice,
    theme: themeSlice
});

export const store = configureStore({
    reducer: rootReducer
});