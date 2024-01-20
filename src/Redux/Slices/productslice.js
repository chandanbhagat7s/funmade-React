import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// to get the list of productt we need to make the request call
export const getAllProduct = createAsyncThunk('/product/allproducts', async () => {
    try {

        const products = await axios.get('http://127.0.0.1:3000/api/v1/product');

        return products.data.data.product


    } catch (e) {
        return e.response.data;
    }
})



const productSlice = createSlice({
    name: 'Products',
    initialState: {
        product: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProduct.fulfilled, (state, action) => {

            state.product = action.payload
        })
    }
})

// export const {}=productSlice.actions;
export default productSlice.reducer;


























