/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Movielist = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 ml-5">
      <img
        className="xsm:w-80"
        src={"https://image.tmdb.org/t/p/w200" + posterPath}
      />
    </div>
  );
};

export default Movielist;
