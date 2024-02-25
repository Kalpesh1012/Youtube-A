import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSlice from "./moviesSlice";
import toggleSlice from "./toggleSlice";
import configSlice from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: moviesSlice,
    toggle: toggleSlice,
    language: configSlice,
  },
});

export default appStore;
