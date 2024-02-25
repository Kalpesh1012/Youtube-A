/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Movielist from "./MovieList";
import { Link } from "react-router-dom";

const MovieCart = ({ title, list }) => {
  return (
    <div className="xl:mt-4 xsm:mb-4 xl:ml-6 xsm:ml-1">
      <h1 className="xl:text-3xl xsm:text-2xl font-bold text-white ml-5">
        {title}
      </h1>
      <div className="flex overflow-x-scroll mt-3" id="scroll">
        <div className="flex ">
          {list?.length > 0 ? (
            list.map((movie, index) => (
              <Link to={"/browse/" + movie.id} key={index}>
                <Movielist posterPath={movie.poster_path} />
              </Link>
            ))
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCart;
