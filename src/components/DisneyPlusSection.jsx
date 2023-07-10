import React from "react";
import { useNavigate } from "react-router-dom";

const DisneyPlusSection = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full gap-3 relative">
      {/* disneyplus*/}
      <div className="w-[230px] relative bg-[#181d26] h-[130px]  rounded hover:scale-110 cursor-pointer transition-all duration-300">
        <img src="./images/disney.png" alt="" className="z-[1] " />
        <video src="disney.mp4" autoPlay loop playsInline muted className="absolute w-full h-full top-0 rounded z-0 opacity-0 hover:opacity-100" />
      </div>
      {/* pixar */}
      <div className="w-[230px] relative bg-[#181d26] h-[130px]  rounded hover:scale-110 cursor-pointer transition-all duration-300">
        <img src="./images/pixar.png" alt="" className="z-[1] " />
        <video src="pixar.mp4" autoPlay loop playsInline muted className="absolute w-full h-full top-0 rounded z-0 opacity-0 hover:opacity-100" />
      </div>
      {/* marvel */}
      <div className="w-[230px] relative bg-[#181d26] h-[130px]  rounded hover:scale-110 cursor-pointer transition-all duration-300" onClick={e=>{navigate('/Marvel')}}>
        <img src="./images/marvel.png" alt="" className="z-[1] " />
        <video src="marvel.mp4" autoPlay loop playsInline muted className="absolute w-full h-full top-0 rounded z-0 opacity-0 hover:opacity-100" />
      </div>

      {/* starwars */}
      <div className="w-[230px] relative bg-[#181d26] h-[130px]  rounded hover:scale-110 cursor-pointer transition-all duration-300">
        <img src="./images/starwar.png" alt="" className="z-[1] " />
        <video src="star-war.mp4" autoPlay loop playsInline muted className="absolute w-full h-full top-0 rounded z-0 opacity-0 hover:opacity-100" />
      </div>

      {/* netgeo */}
      <div className="w-[230px] relative bg-[#181d26] h-[130px]  rounded hover:scale-110 cursor-pointer transition-all duration-300">
        <img src="./images/natgeo.png" alt="" className="z-[1] " />
        <video src="geographic.mp4" autoPlay loop playsInline muted className="absolute w-full h-full top-0 rounded z-0 opacity-0 hover:opacity-100" />
      </div>

      {/* hotstar special */}
      <div className="w-[230px] relative bg-[#181d26] h-[130px]  rounded hover:scale-110 cursor-pointer transition-all duration-300">
        <img src="./images/hotstarSpecial.png" alt="" className="z-[1] object-cover " />
        {/* <video src="geographic.mp4" autoPlay loop playsInline muted className="absolute w-full h-full top-0 rounded z-0 opacity-0 hover:opacity-100" /> */}
      </div>


    </div>
  );
};

export default DisneyPlusSection;
