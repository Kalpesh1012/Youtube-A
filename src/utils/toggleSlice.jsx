/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    showToggleMenu: false,
    movieName: null,
    movieResult: null,
  },
  reducers: {
    addToggleMenu: (state, action) => {
      state.showToggleMenu = !state.showToggleMenu;
    },
    addgptMovies: (state, action) => {
      const { movieName, movieResult } = action.payload;
      state.movieName = movieName;
      state.movieResult = movieResult;
    },
  },
});

export const { addToggleMenu, addgptMovies } = toggleSlice.actions;
export default toggleSlice.reducer;
