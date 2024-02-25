/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import Movielist from "./Movielist";
import MovieCart from "./MovieCart";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className=" bg-black xl:pt-0 xsm:pt-20">
      <div className="xl:-mt-64 xsm:mt-0 xsm:pt-14 xl:pt-0 relative z-20 ">
        <MovieCart title={"Popular"} list={movies?.popularMovies} />
        <MovieCart title={"Upcoming"} list={movies?.upcomingMovies} />
        <MovieCart title={"Now Playing"} list={movies?.nowPlayingMovies} />
        <MovieCart title={"Top-Rated"} list={movies?.topratedMovies} />
        <MovieCart title={"Recommend"} list={movies?.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
