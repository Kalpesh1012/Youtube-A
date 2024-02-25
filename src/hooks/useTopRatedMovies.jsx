/* eslint-disable no-unused-vars */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const nowTopRatedMovies = useSelector((store) => store.movies.topratedMovies);
  const getMoviesDetails = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    if (!nowTopRatedMovies) getMoviesDetails();
  }, []);
};

export default useTopRatedMovies;
