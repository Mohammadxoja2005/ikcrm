import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem('token');

const config = {
    token: `${token}`,
};

export const getBookings = createAsyncThunk('/booking/index', () => {
    return axios.get(`${process.env.REACT_APP_BACKEND_API}/booking/`, config)
        .then((response) => {
            console.log(response);
            return response.data;
        })
})

export const getBooking = createAsyncThunk('/booking/show?id=12', (id) => {
    return axios.get(`${process.env.REACT_APP_BACKEND_API}/booking/${id}`, config)
        .then((response) => {
            return response.data;
        })
})

const bookingSlice = createSlice({
    name: "booking",
    initialState: {
        bookings: [],
        booking: [],
        isLoading: false
    },
    reducers: {
        deleteBooking(state, action) {
            const data = action.payload;

            axios.delete(`${process.env.REACT_APP_BACKEND}/booking/delete`, data)
                .then((response) => {
                    console.log(response);
                })
        }
    },
    extraReducers: {
        [getBookings.pending]: (state, action) => {
            state.isLoading = false;
        },
        [getBookings.fulfilled]: (state, action) => {
            state.isLoading = true;
            state.bookings = action.payload;
        },
        [getBookings.rejected]: (state, action) => {
            state.isLoading = false;
        },


        [getBooking.pending]: (state, action) => {
            state.isLoading = false;
        },
        [getBooking.fulfilled]: (state, action) => {
            state.isLoading = true;
            state.booking = action.payload;
        },
        [getBooking.rejected]: (state, action) => {
            state.isLoading = false;
        }
    }
})

export const { deleteBooking } = bookingSlice.actions;
export default bookingSlice.reducer;