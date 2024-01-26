import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryConatiner = () => {
  const movies=useSelector(store=> store.movies);
  return  movies.nowPlayingMovies &&(
    <div className=' bg-black ' >
      <div className='-mt-50  pl-6 realtive z-20'>
      <MovieList  title={"Now Playing" } movies={movies.nowPlayingMovies} />
      <MovieList  title={"Top Rated" } movies={movies.topRatedMovies} />
      <MovieList  title={"Popular" } movies={movies.popularMovies} />
      <MovieList  title={"UpComing" } movies={movies.upcomingMovies} />
      {/* <MovieList  title={"Now Playing" } movies={movies.nowPlayingMovies} /> */}
      {/* <MovieList  title={"Now Playing" } movies={movies.nowPlayingMovies} /> */}
      </div>
      
    </div>
  )
}

export default SecondaryConatiner;
