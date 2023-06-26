import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem('token');

const config = {
    token: `${token}`,
};

export const createResidentialComplex = createAsyncThunk('/residentialComplex/create', (data) => {
    return axios.post(`${process.env.REACT_APP_BACKEND_API}/residential_complex/`, data, config)
})

export const getComplexes = createAsyncThunk('/residentialComplex/get', () => {
    return axios.get(`${process.env.REACT_APP_BACKEND_API}/residential_complex/`, config)
        .then((response) => {
            return response.data;
        })
})

export const getComplexLobbies = createAsyncThunk('/residentialComplex/lobbies', (complexId) => {
    return axios.get(`${process.env.REACT_APP_BACKEND_API}/residential_complex_lobbies/?complex_id=${complexId}`, config).
        then((response) => {
            return response.data;
        })
})

export const getLobbyFlats = createAsyncThunk('/lobbies/flat', (data) => {
    return axios.get(`${process.env.REACT_APP_BACKEND_API}/residential_complex_lobby/?complex_id=${data.complexId}&&lobby_id=${data.lobbyId}`, config)
        .then((response) => {
            return response.data;
        })
})

export const getFlats = createAsyncThunk('/flats', (data) => {
    return axios.get(`${process.env.REACT_APP_BACKEND_API}/residential_complex_flat/?complex_id=${data.complexId}&&lobby_id=${data.lobbyId}&&floor_id=${data.floorId}&&flat_id=${data.flatId}`, config)
        .then((response) => {
            return response.data;
        })
})

export const deleteComplex = createAsyncThunk('residentialComplex/delete', (id) => {
    return axios.delete(`${process.env.REACT_APP_BACKEND_API}/residential_complex/${id}`, config);
})

const residentialComplex = createSlice({
    name: "residentialComplex",
    initialState: {
        isLoading: false,
        complexes: [],
        lobbies: [],
        flats: [],
        singleFlat: {}
    },
    reducers: {

    },
    extraReducers: {
        [getComplexes.pending]: (state, action) => {
            state.isLoading = false;
        },
        [getComplexes.fulfilled]: (state, action) => {
            state.isLoading = true;
            state.complexes = action.payload;
        },
        [getComplexes.rejected]: (state, action) => {
            state.isLoading = false;
        },

        [getComplexLobbies.pending]: (state, action) => {
            state.isLoading = false;
        },
        [getComplexLobbies.fulfilled]: (state, action) => {
            state.isLoading = true;
            state.lobbies = action.payload;
        },
        [getComplexLobbies.rejected]: (state, action) => {
            state.isLoading = false;
        },


        [getLobbyFlats.pending]: (state, action) => {
            state.isLoading = false;
        },
        [getLobbyFlats.fulfilled]: (state, action) => {
            state.isLoading = true;
            state.flats = action.payload;
        },
        [getLobbyFlats.rejected]: (state, action) => {
            state.isLoading = false;
        },

        [getFlats.pending]: (state, action) => {
            state.isLoading = false;
        },
        [getFlats.fulfilled]: (state, action) => {
            state.isLoading = true;
            state.singleFlat = action.payload;
        },
        [getFlats.rejected]: (state, action) => {
            state.isLoading = false;
        },
    }
})

export const { } = residentialComplex.actions;
export default residentialComplex.reducer;