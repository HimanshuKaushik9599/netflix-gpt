import { useEffect } from "react";
import { API_Options } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../Utils/movieSlice";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ id }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  // console.log(movieId);
  useMovieTrailer(id);
  
  return (
    <div className=" bg-gradient-to-r from-black">
      <iframe
      className="w-full	 aspect-video  "
      src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?si=35VTsJ03x2Y7Ham6&autoplay=1&mute=1"}
      title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
