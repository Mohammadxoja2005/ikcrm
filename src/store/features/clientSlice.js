import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem('token');

const config = {
    token: `${token}`,
};

export const getDealClients = createAsyncThunk('clients/dealclients', () => {
    return axios.get(`${process.env.REACT_APP_BACKEND_API}/deal_clients`, config)
        .then((response) => {
            console.log(response);
            return response.data;
        })
})

export const getAllClients = createAsyncThunk('clients/allclients', () => {
    return axios.get(`${process.env.REACT_APP_BACKEND_API}/all_clients`, config)
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
})

export const deleteDealClient = createAsyncThunk('client/delete', (id) => {
    return axios.delete(`${process.env.REACT_APP_BACKEND_API}/deal_clients/${id}`, config);
})

export const deleteAllClient = createAsyncThunk('client/delete', (id) => {
    return axios.delete(`${process.env.REACT_APP_BACKEND_API}/all_clients/${id}`, config)
})

export const createDealClient = createAsyncThunk('client/create', (data) => {
    return axios.post(`${process.env.REACT_APP_BACKEND_API}/deal_clients`, data, config)
        .then((response) => console.log(response));
})

export const createAllClient = createAsyncThunk('client/create', (data) => {
    return axios.post(`${process.env.REACT_APP_BACKEND_API}/all_clients`, data, config)
        .then((response) => console.log(response));
})

const clientSlice = createSlice({
    name: 'client',
    initialState: {
        allClients: [],
        dealClients: [],
        isLoading: false,
    },

    reducers: {
        // createDealClient(state, action) {
        //     const data = action.payload;

        //     axios.post(`${process.env.REACT_APP_BACKEND_API}/deal_clients`, data, config)
        //         .then((response) => console.log(response));
        // },

        // createAllClient(state, action) {
        //     const data = action.payload;

        // }
    },

    extraReducers: {
        [getDealClients.pending]: (state, action) => {
            state.isLoading = false;
        },

        [getDealClients.fulfilled]: (state, action) => {
            state.isLoading = true;
            state.dealClients = action.payload;
        },

        [getDealClients.rejected]: (state, action) => {
            state.isLoading = false;
        },


        [getAllClients.pending]: (state, action) => {
            state.isLoading = false;
        },

        [getAllClients.fulfilled]: (state, action) => {
            state.isLoading = true;
            state.allClients = action.payload;
        },

        [getDealClients.rejected]: (state, action) => {
            getAllClients.isLoading = false;
        }
    }
})

export const { } = clientSlice.actions;
export default clientSlice.reducer;