import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utils/movieSlice";
import { useEffect } from "react";
import { API_Options } from "../Utils/Constants";

const useNowPlayingMovies=()=>{
    const dispatch=useDispatch();

const getNowPlayingMovies = async ()=>{
  const data=await fetch('https://api.themoviedb.org/3/movie/now_playing',API_Options);
  const json=await data.json();
  dispatch(addNowPlayingMovies(json.results));
};

useEffect(()=>{
  getNowPlayingMovies();
},[]);

}
export default useNowPlayingMovies;