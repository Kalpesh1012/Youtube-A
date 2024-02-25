/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { addgptMovies } from "../utils/toggleSlice";

const MainContainer = () => {
  const moviesDetails = useSelector(
    (store) => store.movies?.nowPlayingMovies?.[2]
  );
  const dispatch = useDispatch();
  dispatch(addgptMovies({ movieName: null, movieResult: null }));
  if (!moviesDetails) return;

  const { original_title, overview, id } = moviesDetails;
  return (
    <div>
      <VideoTitle original_title={original_title} overview={overview} />
      <VideoBackground id={id} />
    </div>
  );
};

export default MainContainer;
