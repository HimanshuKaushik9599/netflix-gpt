import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryConatiner = () => {
  const movies=useSelector(store=> store.movies);
  // console.log(movies)
  return  movies.nowPlayingMovies &&(
    <div className=' bg-black ' >
      <div className="mt-0 md:-mt-45  pl-2 md:pl-6 relative z-20 pb-5">
      <MovieList  title={"Now Playing" } movies={movies.nowPlayingMovies}  />
      <MovieList  title={"Top Rated" } movies={movies.topRatedMovies}  />
      <MovieList  title={"Popular" } movies={movies.popularMovies}  />
      <MovieList  title={"UpComing" } movies={movies.upcomingMovies}/>
      </div>
      
    </div>
  )
}

export default SecondaryConatiner;
