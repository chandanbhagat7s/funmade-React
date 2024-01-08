




import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedin: localStorage.getItem('isLoggedIn') || false
}

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {}
})

// export const {} = slice.actions
export default slice.reducer;
























