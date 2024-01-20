import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Slices/AuthSlice";
import ProductSlice from "./Slices/productslice";


const store = configureStore({
    reducer: {
        auth: AuthSlice,
        product: ProductSlice
    }
});

export default store;











