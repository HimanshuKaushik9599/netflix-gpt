import React, { useRef } from "react";
import lang from "../Utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../Utils/openAi";
import { API_Options } from "../Utils/Constants";
import { addGptmoviesResult } from "../Utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch=useDispatch();

  //search movie in tmdb
  const searchTmdbMovie = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_Options
    );

    const json = await data.json();
    return json.results;
  };
  const handleGptSerchClick = async () => {
    //make an api call to openai and get movie results
    const gptQuery =
      "Act as a movie recommendation system and suggest me some movie for the query " +
      searchText.current.value +
      "only give me names of 5 movies ,commma seperated like the example result given ahead .Example result:Gadar ,Don ,Sholay ,Jaan ,koi mil gaya  ";

    const GptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    // console.log(GptResults.choices?.[0]?.message?.content);
    const gptMovies = GptResults.choices?.[0]?.message?.content.split(",");
    console.log(gptMovies);

    const PromiseData = gptMovies.map((movie) => searchTmdbMovie(movie));
    const tmdbResults = await Promise.all(PromiseData);
    console.log(tmdbResults);
    dispatch(addGptmoviesResult({movieName:gptMovies,movieResults: tmdbResults}));

    
  };

  return (
    <div className="pt-[35%] md:pt-[7%] flex justify-center">
      <form
        className="  w-[80%]  md:w-1/2 grid grid-cols-12 rounded-lg bg-black"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-2 m-2 col-span-9 rounded-lg border-2 "
          placeholder={lang[langKey].gptSearchPlaceholder}
        ></input>
        <button
          className="py-2  bg-red-700 col-span-3 m-2 text-white rounded-lg"
          onClick={handleGptSerchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
