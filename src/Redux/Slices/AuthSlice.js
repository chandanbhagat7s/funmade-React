




import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loggedin: localStorage.getItem('isLoggedIn') || false,
    role: localStorage.getItem('role') || '',
    data: JSON.parse(localStorage.getItem('data')) | ''
}

// we are going to create async thunks : thunks are the pice of code which is to be performed with some delay 
export const createAccount = createAsyncThunk('/auth/signup', async (data) => {
    try {
        const datares = await axios.post("http://127.0.0.1:3000/api/v1/user/signup", data);
        console.log(datares);
        return datares;
    } catch (error) {
        console.log(error);
        return error.response.data;
    }
})


export const LoginIntoAccount = createAsyncThunk('/auth/login', async (data) => {
    try {
        const datares = await axios.post("http://127.0.0.1:3000/api/v1/user/login", data, {
            withCredentials: true,


        });
        console.log("res is ", datares);
        return datares;
    } catch (error) {
        console.log(error);
        return error.response.data;
    }
})
export const logoutFromAccount = createAsyncThunk('/auth/logout', async (data) => {
    try {
        const datares = await axios.get("http://127.0.0.1:3000/api/v1/user/logout");

        return datares;
    } catch (error) {
        return error.response.data.data;
    }
})



export const addTocart = createAsyncThunk('/auth/user/addToCart', async (productName) => {
    try {
        const res = await axios.patch(
            "http://127.0.0.1:3000/api/v1/user/addToCart",
            { productName },
            {
                withCredentials: true,
            }
        );
        return res;
    } catch (error) {
        return error.response.data;
    }
})


export const removeFromCart = createAsyncThunk('/auth/user/removeFromCart', async (productName) => {
    try {
        const res = await axios.patch(
            "http://127.0.0.1:3000/api/v1/user/removeFromCart",
            { productName },
            {
                withCredentials: true,
            }
        );
        return res;
    } catch (error) {
        return error.response.data;
    }
})




const slice = createSlice({
    name: 'auth',
    initialState,

    reducers: {},
    // we are going to pass extrareducer , this is used to perform updation on the action which is ouside the slice / or thunks okk 
    extraReducers: (builder) => {
        builder.addCase(LoginIntoAccount.fulfilled, (state, action) => {
            console.log(action);
            localStorage.setItem('data', JSON.stringify(action?.payload?.data?.user))
            localStorage.setItem('role', action?.payload?.data?.user?.role)
            localStorage.setItem('isLoggedIn', true)

            state.data = action?.payload?.data?.user
            state.role = action?.payload?.data?.user?.role
            state.loggedin = true;
        })
            .addCase(logoutFromAccount.fulfilled, (state, action) => {
                localStorage.clear()
                state.data = {}
                state.role = ''
                state.loggedin = false
            })
            .addCase(addTocart.fulfilled, (state, action) => {

                if (action?.payload?.data?.status == 'success') {
                    localStorage.setItem('data', JSON.stringify(action.payload.data.data))

                    state.data = action?.payload?.data?.data
                }


            })
            .addCase(removeFromCart.fulfilled, (state, action) => {
                console.log(action);
                // const newCart=action.payload.data.data.userCart;
                if (action?.payload?.data?.status == 'success') {
                    localStorage.setItem('data', JSON.stringify(action.payload.data.data))

                    state.data = action?.payload?.data?.data
                }


            })
    }


})

// export const {} = slice.actions
export default slice.reducer;
























