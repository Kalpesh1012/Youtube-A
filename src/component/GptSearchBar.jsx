/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/LanguageConstants";
import openai from "../utils/openAi";
import { API_OPTIONS } from "../utils/constants";
import { addgptMovies } from "../utils/toggleSlice";
import Shimmer from "./Shimmer";
import { useState } from "react";

const GptSearchBar = () => {
  const [loading, setLoading] = useState(false);
  const langKey = useSelector((store) => store.language.lang);
  const searchMovie = useRef(null);
  const dispatch = useDispatch();
  const showMoviesSearch = async (movie) => {
    const search = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await search.json();
    return json.results;
  };
  const handleMovieSearch = async () => {
    setLoading(true);
    dispatch(addgptMovies({ movieName: "", movieResult: "" }));
    const queryMovie =
      "Act as a Movie Recommendation system and suggest some movies from the query" +
      searchMovie.current.value +
      "only give me names of 5 movies, coma separated like the example given ahead. Example Don, Koi Mil Gaya, Ram Lakhan, Makki, Main Tera Hero";
    try {
      const data = await openai.chat.completions.create({
        messages: [{ role: "user", content: queryMovie }],
        model: "gpt-3.5-turbo",
      });

      const gptmovieNames = data.choices?.[0]?.message?.content.split(",");
      const movieNames = gptmovieNames.map((movie) => showMoviesSearch(movie));
      const tmdbResult = await Promise.all(movieNames);
      dispatch(
        addgptMovies({ movieName: gptmovieNames, movieResult: tmdbResult })
      );
    } finally {
      setLoading(false); // Set loading to false when the movie search is complete
    }
  };
  return (
    <div>
      <div className="xl:pt-[10%] xsm:pt-[30%] flex justify-center">
        <form
          className="xl:w-1/2 bg-black grid grid-cols-12"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            ref={searchMovie}
            placeholder={lang[langKey].inputPlaceholder}
            className="p-4 m-4 col-span-9 xl:text-base xsm:text-sm"
          ></input>
          <button
            className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg xl:text-base xsm:text-sm"
            onClick={() => {
              handleMovieSearch();
            }}
          >
            {lang[langKey].Search}
          </button>
        </form>
      </div>
      {loading && <Shimmer />}
    </div>
  );
};

export default GptSearchBar;
