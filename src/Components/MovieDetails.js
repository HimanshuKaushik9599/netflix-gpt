import { useSelector } from "react-redux";
import { Img_CDN_URL, LOGO } from "../Utils/Constants";
import { useLocation, useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const movies = useSelector((store) => store.movies);
  const location = useLocation();
  const moviedata = location.state;
  // console.log(moviedata);
  // console.log(movies);
  // console.log(moviedata.path);
  const navigate = useNavigate();
  return (
    <div className="bg-black h-screen ">
      <div className="  w-full px-8 py-2  flex justify-between z-10   ">
        <img src={LOGO} alt="Logo" className="w-44"></img>
        <button
          className="bg-red-700  px-4 my-1 mx-2 rounded-lg font-bold "
          onClick={() => {
            navigate("/browse");
          }}
        >
          Back
        </button>
      </div>
      <div className="flex  mt-10 md:mt-0  ">
        <img
          src={moviedata.path}
          alt="Loading "
          className="mx-5 pb-5 w-80 h-80 md:w-[25%] md:h-[25%]"
        ></img>
        <div className="mx-5 text-white ">
          <h1 className="text-2xl md:text-5xl ">{moviedata.movieTitle}</h1>
          <h2 className="text-sm md:text-2xl my-2 md:my-5">{moviedata.overview}</h2>
          <h2 className="text-sm md:text-xl my-2 md:my-5">
            {" "}
            Release Date: {moviedata.release_date}
          </h2>
          <h2 className=" text-sm md:text-xl  my-2 md:my-5"> Ratings: {moviedata.vote_average}</h2>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
