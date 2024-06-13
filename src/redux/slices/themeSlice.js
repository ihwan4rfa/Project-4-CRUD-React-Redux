import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        isDark: localStorage.getItem('isDark') === 'true' ? true : false,
        startTheme: localStorage.getItem('isDark') === 'true' ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark")
    },
    reducers: {
        dark: (state, action) => {
            localStorage.setItem('isDark', 'true');
            document.documentElement.classList.add("dark");
            state.isDark = true;
        },
        light: (state, action) => {
            localStorage.setItem('isDark', 'false');
            document.documentElement.classList.remove("dark");
            state.isDark = false;
        }
    }
});

export default themeSlice.reducer;
export const { dark, light } = themeSlice.actions;