import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { recomposeColor } from "@mui/material";
import ReactPlayer from "react-player/youtube";

const Watch = () => {
  const [trailer, setTrailer] = useState([]);
  const data = useSelector((state) => state.redirect);
  const initialMovie = data[data.length - 1];
  // const MovieId = initialMovie.id;
  // const videoUrl = `https://api.themoviedb.org/3/movie/${MovieId}/videos?api_key=becbc67b6d16c8ab0e8c55349c906581`;
  // useEffect(() => {
  //   axios.get(videoUrl).then((response) => {
  //     setTrailer(response.data.results);
  //   });
  // }, []);
  // const item = trailer[0];
  // console.log("this  is a the video")
  // console.log(item);
  // const videoKey = item.key;
  // console.log(videoKey);
  // const finalUrl = `https://www.youtube.com/watch?v=${videoKey}`;

  const blackPanther = `https://www.youtube.com/watch?v=RlOB3UALvrQ&t=52s`

  const [vurl, seturl] = useState(
    `https://www.youtube.com/watch?v=shW9i6k8cB0`
  );
  if(initialMovie.id == 505642){
    seturl(`https://www.youtube.com/watch?v=RlOB3UALvrQ&t=52s`)
  }
  return (
    <div className="w-full max-h-screen bg-black relative overflow-hidden">
      <img
        src={`https://image.tmdb.org/t/p/original/${initialMovie?.backdrop_path}`}
        alt=""
        className=""
      />
      <div className="absolute top-0 w-full  mt-10 flex gap-3 items-center ml-5  h-[20px] z-10 ">
        <span className=" mt-2 text-white text-2xl">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </span>
        <p className="text-white font-semibold text-2xl">
          {initialMovie.title}
        </p>
      </div>
      <div className="absolute w-full h-full bg-gradient-to-r from-black to-transparent top-0"></div>
      <div className="absolute w-[700px] h-[400px] z-20 top-0">
        <ReactPlayer url={vurl} width={1600} height={740} />
      </div>
    </div>
  );
};

export default Watch;

// BbXJ3_AQE_o
// https://www.youtube.com/watch?v=BbXJ3_AQE_o
