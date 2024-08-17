import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./features/page-slice";
export const store = configureStore({
    reducer: {
        pageReducer,
    },
});
