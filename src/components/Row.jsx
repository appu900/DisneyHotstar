import React, { useEffect, useState } from "react";
import Longcard from "./Longcard";
import axios from "axios";

const Row = ({ id, fetchurl, title }) => {
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    axios.get(fetchurl).then((response) => {
      // console.log("this is movie row section");
      // console.log(response);
      setmovies(response.data.results);
    });
  }, []);
  return (
    <div className=" mt-10 overflow-y-visible">
     <div className="text-left text-white font-semibold text-2xl mb-3 ml-2">
        <p>{title}</p>
    </div>   
    <div className="flex gap-3 px-1 py-2 w-[1390px] overflow-x-scroll scrollbar-hide scroll-smooth"> 
      {movies.map((item) => (
        <Longcard mvy={item} title={title} />
      ))}
    </div>
    </div>
  );
};

export default Row;
