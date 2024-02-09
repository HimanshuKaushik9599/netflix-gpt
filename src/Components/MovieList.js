import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);

  return (
    <div className="px-10">
      <h1 className="text-lg md:text-2xl py-3 text-white">{title}</h1>

      <div className="flex overflow-x-scroll scrollbar-hide movie-card ">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              original_title={movie.original_title}
              overview={movie.overview}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
