import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem('token');

const config = {
    token: `${token}`,
};

export const getAllTasks = createAsyncThunk('/tasks', () => {
    return axios.get(`${process.env.REACT_APP_BACKEND_API}/task`)
        .then((response) => {
            return response.data;
        })
})

export const createTask = createAsyncThunk('/createTask', (data) => {
    console.log(data);

    // return axios.post(`${process.env.REACT_APP_BACKEND_API}/task`)
    //     .then((response) => {
    //         console.log(response.data);
    //     })   
})

const taskSlice = createSlice({
    name: "task",
    initialState: {
        tasks: [],
        isLoading: false,
    },
    reducers: {

    },
    extraReducers: {
        [getAllTasks.pending]: (state, action) => {
            state.isLoading = false;
        },

        [getAllTasks.fulfilled]: (state, action) => {
            state.isLoading = true;
            state.tasks = action.payload;
        },
        [getAllTasks.rejected]: (state, action) => {
            state.isLoading = false;
        }
    }
})

export const { } = taskSlice.actions;
export default taskSlice.reducer;