import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem('token');

const config = {
    token: `${token}`,
};

export const getAllUsers = createAsyncThunk('/users', () => {
    return axios.get(`${process.env.REACT_APP_BACKEND_API}/user`, config)
        .then((response) => {
            return response.data;
        })
})

const userSlice = createSlice({
    name: "user",
    initialState: {
        users: [],
        isLoading: false
    },
    reducers: {

    },
    extraReducers: {
        [getAllUsers.pending]: (state, action) => {
            state.isLoading = false;
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.isLoading = true;
            state.users = action.payload;
        },
        [getAllUsers.rejected]: (state, action) => {
            state.isLoading = false;
        }
    }
})

export const { } = userSlice.actions;
export default userSlice.reducer;