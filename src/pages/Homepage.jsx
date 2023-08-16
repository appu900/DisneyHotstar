import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Poster from "../components/Poster";
import Videocard from "../components/Videocard";
import axios from "axios";
import requests from "../Api/MApi";
import ContinueWatching from "../components/ContinueWatching";
import Row from "../components/Row";
import DisneyPlusSection from "../components/DisneyPlusSection";
import Watchlist from "../components/Watchlist";
import LoadingBar from "react-top-loading-bar";
// #16181F

const Homepage = () => {
  const [count, setcount] = useState(0);
  const [progress, setProgress] = useState(0);

  return (
    <div className="bg-[#0F1014] w-full h-auto flex ">
      <LoadingBar color="#11009E" height={5} progress={100} loaderSpeed={300} />
      <div className="w-[8%] h-screen fixed bg-transparent z-50  to-transparent  ">
        <Navbar />
      </div>
      {/* main content section */}
      <div className="w-full h-auto bg-gradient-to-t from-[#0f1014] ">
        <div className="mt-5 pl-[8%] ">
          <Poster />
        </div>
        <div className="w-full h-[700px] relative   ">
          <Videocard />
          <div className="absolute top-[89%]  text-white bg-gradient-to-t from-[#0f1014] ">
            <div className="w-full mt-4   ">
              <h1 className="text-white text-xl ml-32 font-semibold  text-left">
                Continue Watching for Appu
              </h1>
              <div className="mt-1 ml-32">
                <ContinueWatching />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  mt-[240px] pl-32 text-white">
          <Row title="Popular shows" fetchurl={requests.requestIndian} />
          {/* watchlist section  */}
          <div>
            <Watchlist />
          </div>
          <Row title="Upcoming Shows" fetchurl={requests.requestUpcoming} />
          <Row title="Toprated shows" fetchurl={requests.requestTopRated} />
          <Row title="Popular shows" fetchurl={requests.TreandingMovies} />
          <Row title="Popular shows" fetchurl={requests.requestPopular} />

          <div className="mt-10 ">
            <DisneyPlusSection />
          </div>
          <div>
            <Row title="Toprated shows" fetchurl={requests.requestTopRated} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;


