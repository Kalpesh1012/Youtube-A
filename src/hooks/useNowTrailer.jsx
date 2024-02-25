import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerMovies, resetTrailerMovies } from "../utils/moviesSlice";
import { useNavigate } from "react-router-dom";

const useNowTrailer = (id) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const nowVideoBackground = async () => {
      try {
        if (!id) {
          // Reset trailerMovies when id is null (i.e., on the home page)
          dispatch(resetTrailerMovies());
          navigate("/browse");
          return;
        }

        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
          API_OPTIONS
        );
        const json = await data.json();

        const movieTrailers = json.results.filter(
          (value) => value.type === "Trailer"
        );

        // If there are 2 trailers for a single movie or there is no trailer, then we can show any result on that
        const trailer = movieTrailers.length
          ? movieTrailers[0]
          : json.results[0];

        dispatch(addTrailerMovies(trailer?.key));
      } catch (error) {
        console.error("Error fetching and processing movie trailers:", error);
        // Handle error if needed
      }
    };

    // Execute the function when the component mounts or id changes
    nowVideoBackground();
  }, [dispatch, id]);

  return null; // Or any value you want to return
};

export default useNowTrailer;
