import { createSlice } from "@reduxjs/toolkit";

type Page = {
    id: string;
    name: string;
    slug: string;
    path: string;
};

type PagesState = {
    pages: Page[];
};

const initialState: PagesState = {
    pages: [
        {
            id: "1",
            name: "Home",
            slug: "home",
            path: "/",
        },
        {
            id: "2",
            name: "About",
            slug: "about",
            path: "/about",
        },
        {
            id: "3",
            name: "Contact",
            slug: "contact",
            path: "/contact",
        },
    ],
};

export const page = createSlice({
    name: "page",
    initialState,
    reducers: {
        addPage: (state, action) => {
            state.pages.push(action.payload);
        },
        removePage: (state, action) => {
            state.pages = state.pages.filter(
                (page) => page.id !== action.payload
            );
        },
    },
});

export const { addPage, removePage } = page.actions;
export default page.reducer;
