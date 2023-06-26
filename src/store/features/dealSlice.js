import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem('token');

const config = {
    token: `${token}`,
};

export const getDeals = createAsyncThunk('/deal/index', () => {
    return axios.get(`${process.env.REACT_APP_BACKEND}/deal/index`, config)
        .then((response) => {
            return response.data;
        })
})

const dealSlice = createSlice({
    name: "deal",
    initialState: {
        deals: [],
        deal: [],
        isLoading: false
    },

    reducers: {
        changeDealStatus(state, action) {
            const data = action.payload;
            console.log(data);
            // axios.post(`${process.env.REACT_APP_BACKEND}/deal/update-status`, data, config)
        }
    },

    extraReducers: {
        [getDeals.pending]: (state, action) => {
            state.isLoading = false;
        },

        [getDeals.fulfilled]: (state, action) => {
            state.isLoading = true;
            state.deals = action.payload;
        },

        [getDeals.rejected]: (state, action) => {
            state.isLoading = false;
        },
    }
})

export const { changeDealStatus } = dealSlice.actions;
export default dealSlice.reducer;