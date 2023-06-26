import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem('token');

const config = {
    token: `${token}`,
};

export const getDashboard = createAsyncThunk('/dashboard', () => {
    return axios.get(`${process.env.REACT_APP_BACKEND_API}/home`)
        .then((response) => {
            return response.data;
        })
})

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState: {
        isLoading: false,
        dashboard: {}
    },

    extraReducers: {
        [getDashboard.pending]: (state, action) => {
            state.isLoading = false;
        },

        [getDashboard.fulfilled]: (state, action) => {
            state.isLoading = true;
            state.dashboard = action.payload;
        },

        [getDashboard.rejected]: (state, action) => {
            state.isLoading = false;
        },
    }
})

export const { } = dashboardSlice.actions;
export default dashboardSlice.reducer;
