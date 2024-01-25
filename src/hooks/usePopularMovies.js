import { useDispatch } from "react-redux";
import {  addPopularMovies } from "../Utils/movieSlice";
import { useEffect } from "react";
import { API_Options } from "../Utils/Constants";

const usePopularMovies=()=>{
    const dispatch=useDispatch();

const getPopularMovies = async ()=>{
  const data=await fetch('https://api.themoviedb.org/3/movie/popular?page=1',API_Options);
  const json=await data.json();
  // console.log(json.results);
  dispatch(addPopularMovies(json.results));
};

useEffect(()=>{
    getPopularMovies();
},[]);

}
export default usePopularMovies;