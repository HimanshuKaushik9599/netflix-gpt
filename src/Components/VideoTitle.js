import { useNavigate } from "react-router-dom"
import { Img_CDN_URL } from "../Utils/Constants";

const VideoTitle = ({title,overview,release_date,vote_average,poster_path}) => {
  const navigate=useNavigate();
  const handleMoreInfoBtn =()=>{
    const MovieImage=Img_CDN_URL+poster_path;
    // console.log(poster_path);
    // console.log(MovieImage);
    const data = {
      path: MovieImage,
      movieTitle: title,
      release_date: release_date,
      overview: overview,
      vote_average: vote_average,
    };
    navigate("/movieDetails",{state:data})
  }
  return (
    <div className=" px-10 pt-[25%] md:px-20 w-screeen aspect-video md:pt-[15%]  absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6  text-lg w-1/4">{overview}</p>
      <div className="mt-2 mb-5">
        {/* <button className="bg-white text-black  p-3 px-10 text-xl  rounded-md hover:bg-opacity-70">Play</button> */}
        <button className="  bg-gray-500 text-white  mx-1 p-2 md:p-3  px-3 md:px-10 text-xl bg-opacity-50 rounded-md " onClick={handleMoreInfoBtn} >More Info </button>
      </div>
    </div>
  )
}

export default VideoTitle
