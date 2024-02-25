/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import MovieCart from "./MovieCart";
import { Link } from "react-router-dom";

const GptMovieSuggestions = () => {
  const { movieName, movieResult } = useSelector((store) => store.toggle);

  if (!movieName) return null;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-70">
      <div>
        <h1>
          {movieName.map((movie, index) => {
            return (
              <MovieCart key={index} title={movie} list={movieResult[index]} />
            );
          })}
        </h1>
      </div>
    </div>
  );
};
//<MovieCart title={movieName[0]} list={movieResult[0]} />
export default GptMovieSuggestions;
