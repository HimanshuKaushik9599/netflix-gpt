import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { Background_img } from '../Utils/Constants'

const GptSearch = () => {
  return (
    <>
     <div className="fixed -z-10">
        <img
          src={Background_img} 
          alt="background"
          className="h-screen w-screen object-cover"
        ></img>
      </div>
      <div className=''>
       
       <GptSearchBar />
       <GptMovieSuggestion />
           </div>
       
    </>
     )
}

export default GptSearch
