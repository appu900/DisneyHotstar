import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Longcard from "./Longcard";
import ContinuewatchingCard from "./ContinuewatchingCard";

//curl --request GET \
// --url 'https://api.themoviedb.org/3/movie/movie_id/videos?language=en-US' \
// --header 'accept: application/json'

const ContinueWatching = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=becbc67b6d16c8ab0e8c55349c906581&language=en-US&page=1"
      )
      .then((response) => {
        
        setMovies(response.data.results);
      });
  }, []);


  return (
    <div className="flex gap-3 px-1 py-2 w-[1390px] overflow-scroll scrollbar-hide scroll-smooth">
      {movies.map((item) => (
        <ContinuewatchingCard mvy={item}/>
      ))}
    </div>
  );
};

export default ContinueWatching;
