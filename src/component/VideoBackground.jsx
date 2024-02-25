/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import useNowTrailer from "../hooks/useNowTrailer";

const VideoBackground = ({ id }) => {
  const trailerid = useSelector((store) => store.movies.trailerMovies);

  useNowTrailer(id);
  return (
    <div className="w-screen ">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerid}?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
