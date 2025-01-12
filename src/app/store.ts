import { configureStore } from "@reduxjs/toolkit";
import themeTogglerReducer from "../features/themeToggler/themeTogglerSlice";
import calendarPremieresReducer from "../features/calendarPremieres/calendarPremieresSlice";

export const store = configureStore({
  reducer: {
    themeToggler: themeTogglerReducer,
    calendarPremieres: calendarPremieresReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
