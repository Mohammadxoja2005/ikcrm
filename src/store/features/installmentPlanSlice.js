import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem('token');

const config = {
    token: `${token}`,
};

export const getAllInstallmentPlans = createAsyncThunk('/installmentplan', () => {
    return axios.get(`${process.env.REACT_APP_BACKEND_API}/installment_plan`)
        .then((response) => {
            return response.data;
        })
})

export const getAllInstallmentSingle = createAsyncThunk('/installmentplanone', (id) => {
    console.log(id)

    return axios.get(`${process.env.REACT_APP_BACKEND_API}/installment_plan_one`)
        .then((response) => {
            return response.data;
        })
})

export const createInstallmentPlan = createAsyncThunk('/createInstallmentPlan', (data) => {
    return axios.post(`${process.env.REACT_APP_BACKEND_API}/installment_plan`, data, config)
        .then((response) => {
            console.log(response);
        })
})

const installmentPlanSlice = createSlice({
    name: "installmentPlan",
    initialState: {
        isLoading: false,
        installmentPlan: [],
        installmentPlanSingle: {}
    },
    reducers: {

    },
    extraReducers: {
        [getAllInstallmentPlans.pending]: (state, action) => {
            state.isLoading = false;
        },

        [getAllInstallmentPlans.fulfilled]: (state, action) => {
            state.isLoading = true;
            state.installmentPlan = action.payload;
        },

        [getAllInstallmentPlans.rejected]: (state, action) => {
            state.isLoading = false;
        },

        [getAllInstallmentSingle.pending]: (state, action) => {
            state.isLoading = false;
        },

        [getAllInstallmentSingle.fulfilled]: (state, action) => {
            state.isLoading = true;
            state.installmentPlanSingle = action.payload;
        },

        [getAllInstallmentSingle.rejected]: (state, action) => {
            state.isLoading = false;
        }
    }
})

export const { } = installmentPlanSlice.actions;
export default installmentPlanSlice.reducer;