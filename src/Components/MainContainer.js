import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies =useSelector(store=>store.movies?.nowPlayingMovies);
    if(!movies) return;

    const mainMovie=movies[0];
    console.log(mainMovie);

    
    const { original_title,overview ,id  } = mainMovie;
    // console.log(original_title);



  return (
    <div className=''>
              <VideoTitle  title={original_title} overview={overview}/>

        <VideoBackground id={id}  />
      
    </div>
  )
}

export default MainContainer
