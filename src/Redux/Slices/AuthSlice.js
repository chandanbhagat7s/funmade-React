




import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loggedin: localStorage.getItem('isLoggedIn') || false
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
        const datares = await axios.post("http://127.0.0.1:3000/api/v1/user/login", data);
        console.log(datares);
        return datares;
    } catch (error) {
        console.log(error);
        return error.response.data;
    }
})


const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {}
})

// export const {} = slice.actions
export default slice.reducer;
























