/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const VideoTitle = ({ original_title, overview }) => {
  return (
    <div className="w-full  aspect-video xl:pt-72 xsm:pt-36 xl:px-12 xsm:px-6 absolute text-white bg-gradient-to-r from-black">
      <div>
        <h1 className="xl:text-4xl xsm:text-2xl font-bold">{original_title}</h1>
        <h1 className="xl:text-lg xsm:text-sm xl:w-[540px] xsm:w-80 mt-3">
          {overview}
        </h1>
      </div>
      <div className="mt-4">
        <button className="w-28 h-9   bg-white text-black rounded-lg">
          Play Now
        </button>
        <button className="w-28 h-9 bg-gray-400 text-white  rounded-lg ml-2">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
