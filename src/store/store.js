import { configureStore } from "@reduxjs/toolkit";
// slices
import bookingSlice from "./features/bookingSlice";
import clientSlice from "./features/clientSlice";
import dealSlice from "./features/dealSlice";
import taskSlice from "./features/taskSlice";
import residentialComplexSlice from "./features/residentialComplexSlice";
import dashboardSlice from "./features/dashboardSlice";
import installmentPlanSlice from "./features/installmentPlanSlice";
import userSlice from "./features/userSlice";

export const store = configureStore({
    reducer: {
        booking: bookingSlice,
        client: clientSlice,
        deal: dealSlice,
        task: taskSlice,
        residentialComplex: residentialComplexSlice,
        dashboard: dashboardSlice,
        installmentPlan: installmentPlanSlice,
        user: userSlice
    }
})