import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";
import Longcard from "../components/Longcard";
import SearchCard from "../components/SearchCard";
import SkelitonLoder from "../components/SkelitonLoder";
import LoadingBar from 'react-top-loading-bar'


const Search = () => {
  const [movies, setMovies] = useState([]);
  const [search, setsearch] = useState([]);
  const ApiUrl =
    "https://api.themoviedb.org/3/movie/popular?api_key=becbc67b6d16c8ab0e8c55349c906581&language=en-US&page=1";
  const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=becbc67b6d16c8ab0e8c55349c906581&query=";
  const getAllMovies = () => {
    axios.get(ApiUrl).then((response) => {
      setMovies(response.data.results);
      console.log(movies);
    });
  };
  const getSearchedMovies = () => {
    axios.get(SEARCHAPI + search).then((response) => {
      console.log(response);
      setMovies(response.data.results);
    });
  };

  const changeSearch = (event) => {
    console.log(event.target.value);
    setsearch(event.target.value);
  };

  useEffect(() => {
    setMovies([])
    if (search == "") {
      getAllMovies();
    } else {
      getSearchedMovies();
    }
  }, [search]);

  return (
    <div className="min-h-screen w-full bg-[#0F1014] flex">
            <LoadingBar
        color='#11009E'
        height={5}
        progress={100}
        loaderSpeed={500}
        
      />
      <div className="fixed">
        <Navbar />
      </div>

      {/* search bar section for movies bro  */}
      <div className="w-full ml-[8%] pr-6 ">
        <div className="w-full h-[70px] rounded mt-10 bg-[#252833] flex items-center pl-5 ">
          <span className="text-3xl text-white mt-[3px]">
          <ion-icon name="search-outline"></ion-icon>
          </span>
          <input
            type="text"
            className="w-full h-full bg-[#252833]  rounded outline-none px-10 text-white tracking-wide text-xl caret-blue-600"
            placeholder="Movies, shows and more"
            value={search}
            onChange={changeSearch}
          />
        </div>
        <div className="mt-14 text-white font-semibold text-xl">
          <p>Popular Searches</p>
        </div>
        <div className="grid grid-cols-6 gap-7 mt-5">
            {
                movies.length == 0?<SkelitonLoder/>:
            
          movies.map((item, index) => (
            <Longcard mvy={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
