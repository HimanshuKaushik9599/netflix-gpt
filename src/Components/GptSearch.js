import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { Background_img } from '../Utils/Constants'

const GptSearch = () => {
  return (
    <div>
        <div className="absolute -z-10">
        <img
          src={Background_img} 
          alt="background"
          className="w-full h-full object-cover"
        ></img>
      </div>
<GptSearchBar />
<GptMovieSuggestion />
    </div>
  )
}

export default GptSearch
