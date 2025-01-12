import { createSlice } from "@reduxjs/toolkit";

const initialState = { theme: localStorage.getItem("theme") || null };

const themeTogglerSlice = createSlice({
  name: "themeToggler",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
      document.documentElement.className = state.theme;
      localStorage.setItem("theme", state.theme);
    },
    refreshThemeCheck: (state) => {
      if (!state.theme) {
        state.theme = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
        document.documentElement.className = state.theme;
        localStorage.setItem("theme", state.theme);
      } else {
        document.documentElement.className = state.theme;
      }
    },
  },
});

export const { toggleTheme, refreshThemeCheck } = themeTogglerSlice.actions;
export default themeTogglerSlice.reducer;
