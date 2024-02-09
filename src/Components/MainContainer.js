import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  const mainMovie = movies[0];

  // console.log(mainMovie);
  const {
    original_title,
    overview,
    id,
    release_date,
    vote_average,
    poster_path,
  } = mainMovie;
  // console.log(id);

  return (
    <div className=" pt-[30%] bg-black md:pt-0    bg-gradient-to-r from-black">
      <VideoTitle
        title={original_title}
        overview={overview}
        vote_average={vote_average}
        release_date={release_date}
        poster_path={poster_path}
      />

      <VideoBackground id={id} />
    </div>
  );
};

export default MainContainer;
