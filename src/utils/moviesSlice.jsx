import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerMovies: null,
    popularMovies: null,
    topratedMovies: null,
    upcomingMovies: null,
  },
  reducers: {
    addPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerMovies: (state, action) => {
      state.trailerMovies = action.payload;
    },
    resetTrailerMovies: (state) => {
      state.trailerMovies = null;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topratedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
  },
});

export const {
  addPlayingMovies,
  addTrailerMovies,
  resetTrailerMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
