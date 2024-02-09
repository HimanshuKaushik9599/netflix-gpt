import React, { useRef } from "react";
import { Img_CDN_URL } from "../Utils/Constants";
import { useNavigate } from "react-router-dom";

const MovieCard = ({
  posterPath,
  original_title,
  release_date,
  overview,
  vote_average,
}) => {
  const navigate = useNavigate();
  const CardPress = useRef(null);

  const handlePosterClick = () => {
    const imagePath = CardPress.current;

    // console.log(imagePath);
    const data = {
      path: imagePath,
      movieTitle: original_title,
      release_date: release_date,
      overview: overview,
      vote_average: vote_average,
    };
    // console.log(data);
    navigate("/movieDetails", { state: data });
  };
  if(!posterPath) return null;
  return (
    <div className="w-36 md:w-48 pr-4">
      <img
        alt="Movie card"
        src={Img_CDN_URL + posterPath}
        onClick={handlePosterClick}
        ref={() => (CardPress.current = Img_CDN_URL + posterPath)}
      ></img>
    </div>
  );
};

export default MovieCard;
