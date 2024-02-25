/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { auth } from "../utils/Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { FcSearch } from "react-icons/fc";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useDispatch, useSelector } from "react-redux";
import { addToggleMenu } from "../utils/toggleSlice";
import GptSearch from "./GptSearch";
import lang from "../utils/LanguageConstants";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const langkey = useSelector((store) => store.language.lang);
  const istoggle = useSelector((store) => store.toggle.showToggleMenu);

  const handleToggle = () => {
    dispatch(addToggleMenu());
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div>
      <div className="xl:flex xsm:flex-col absolute w-screen pb-2  bg-gradient-to-b from-black z-10 ">
        <div>
          <Header />
        </div>
        <div className="xl:ml-72  ">
          <div className=" xl:ml-[900px] xl:mt-9 xsm:mt-20 ">
            <button
              onClick={handleToggle}
              className="xl:w-28 xsm:w-72 h-8 xl:ml-0 xsm:ml-5  rounded-lg bg-purple-700 text-white"
            >
              {istoggle ? lang[langkey].HomePage : lang[langkey].Search}
            </button>

            <button
              className="text-white xl:ml-5 xsm:ml-3"
              onClick={handleSignOut}
            >
              {lang[langkey].SignOut}
            </button>
          </div>
        </div>
      </div>
      {istoggle ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
