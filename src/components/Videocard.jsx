import React from "react";
import tazaKhabarLogo from "../assests/taazakhabarLogo.png";
import antmanVideo from "../assests/ant2.mp4";
import tazakhabar from "../assests/tazak.mp4";
import { useState } from "react";
import { useEffect } from "react";

const Videocard = () => {
  const [vdo, setVideo] = useState(tazakhabar);
  const [logo, setlogo] = useState(tazaKhabarLogo);
  const handleClick = () => {
    setVideo(antmanVideo);
    alert("hello clicked here");
  };
  return (
    <div className="w-full h-[700px] relative mt-3   ">
      <video autoPlay loop muted className="object-fill h-full ">
        <source src={vdo} type="video/mp4 " />
      </video>
      <div className="absolute  text-white top-0  w-[40%] h-full   bg-gradient-to-r from-black">
        <img src={logo} alt="" className="w-[350px] ml-32 mt-28" />
        <div className="font-bold flex ml-32 gap-8 mt-3 text-center">
          <p className="mt-1">2023.</p>
          <p className="mt-1">2h 4m</p>
          <p className="mt-1">7 Languages</p>
          <div className="border p-1 mb-1 bg-gray-100 opacity-50 text-black">
            U/A 16+
          </div>
        </div>
        <div className=" text-white opacity-75 mt-6 ml-32 text-left text-[17px]">
          <p>
            Ant man and the wasp togeather with their families,explore the
            quanum relem and embark on an adventure that pushes fromm beyond
            what they...
          </p>
        </div>
        <div className="mt-8 ml-32">
          <button className="w-[420px] p-4 rounded-lg   text-gray-900 border border-white bg-white bg-transparent opacity-30 font-bold text-xl ">
            <p className=" opacity-95">Watch Now</p>
          </button>
        </div>
      </div>

      <div className="absolute text-white bottom-0 w-full  h-[10%] bg-gradient-to-t via-[#16181F] to-transparent"></div>
      <div className="absolute text-white top-[75%] w-[370px] left-[60%]   h-[10%] flex items-center gap-1 ">
        <img
          src="antman.png"
          alt=""
          className="h-[60px] w-[110px] rounded cursor-pointer opacity-60"
          onClick={handleClick}
        />
        <img
          src="m3.png"
          alt=""
          className="h-[60px] w-[110px] rounded cursor-pointer opacity-60"
          onClick={handleClick}
        />
        <img
          src="taza.png"
          alt=""
          className="h-[60px] w-[110px] rounded cursor-pointer opacity-60"
          onClick={handleClick}
        />
        <img
          src="m4.png"
          alt=""
          className="h-[60px] w-[110px] rounded cursor-pointer opacity-60"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Videocard;
