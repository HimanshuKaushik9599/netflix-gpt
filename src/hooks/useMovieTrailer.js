import { useDispatch } from "react-redux";
import { API_Options } from "../Utils/Constants";
import { useEffect } from "react";
import { addTrailerVideo } from "../Utils/movieSlice";

const useMovieTrailer=(id)=>{

    const dispatch = useDispatch();

  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos`, // Make the URL dynamic by including the id parameter
      API_Options
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
}
export default useMovieTrailer;