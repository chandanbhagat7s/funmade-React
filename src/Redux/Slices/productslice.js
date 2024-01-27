import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// to get the list of productt we need to make the request call
export const getAllProduct = createAsyncThunk('/product/allproducts', async (url) => {
    try {

        const products = await axios.get(url || 'http://127.0.0.1:3000/api/v1/product', {
            withCredentials: true
        });

        return products.data


    } catch (e) {
        return e.response.data;
    }
})

export const getCartData = createAsyncThunk('/product/cart', async (prodIDS) => {
    try {

        console.log("came", prodIDS);
        const productsListPromises = [...prodIDS].map(ids => {
            return axios.get(`http://127.0.0.1:3000/api/v1/product/${ids}`, {
                withCredentials: true
            });
        })
        console.log(productsListPromises);
        let products = await Promise.all(productsListPromises)
        console.log(products);
        products = products.map(el => {
            return el.data.data.data
        })
        console.log(products);
        return products


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
            console.log(action);
            if (action.payload.status == 'success') {
                state.product = action.payload.data.product
            } else {
                state.product = []

            }
        })
    }
})

// export const {}=productSlice.actions;
export default productSlice.reducer;


























